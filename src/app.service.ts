import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { type CVSchemaType, parseCVSchemaFromJson } from './validation';

@Injectable()
export class AppService {
  private readonly dataPath: string;

  constructor() {
    this.dataPath = join(__dirname, 'data');
  }

  async getData(name: string, lang: string): Promise<CVSchemaType> {
    const filePath = join(this.dataPath, name, `${lang}.json`);

    try {
      const content = await readFile(filePath, 'utf8');
      return parseCVSchemaFromJson(content);
    } catch (error) {
      throw error;
    }
  }
}
