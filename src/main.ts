import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('http://localhost:4000 started');
  await app.listen(4000);
}
bootstrap();
