import { Injectable, type OnModuleInit } from '@nestjs/common';
import { readdir, stat, readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { type CVSchemaType, parseCVSchemaFromJson } from './validation';

@Injectable()
export class AppService implements OnModuleInit {
  private files: Map<string, CVSchemaType> = new Map();

  async onModuleInit() {
    this.files = await this.readDirectory(join(__dirname, 'data'));
  }

  getData(id: string): CVSchemaType | undefined {
    return this.files.get(id);
  }

  async reload() {
    await this.onModuleInit();
  }

  async readDirectory(
    directoryPath: string,
  ): Promise<Map<string, CVSchemaType>> {
    const result: Map<string, CVSchemaType> = new Map();

    try {
      const files = await readdir(directoryPath, { encoding: 'utf-8' });

      for (const file of files) {
        const filePath = join(directoryPath, file);
        const stats = await stat(filePath);

        if (file.endsWith('.json') && stats.isFile()) {
          const content = await readFile(filePath, 'utf8');
          result.set(file.replace('.json', ''), parseCVSchemaFromJson(content));
        }
      }

      return result;
    } catch (error) {
      console.error('Error reading directory:', error);
      return result;
    }
  }
}
