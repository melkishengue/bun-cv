import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(bootstrap.name);
  const PORT = process.env.PORT ?? 3010;

  await app.listen(PORT, () => {
    logger.log(`Server is listening at port ${PORT}`);
    logger.log(`Current environment is: ${process.env.NODE_ENV}`);
  });
}
bootstrap();
