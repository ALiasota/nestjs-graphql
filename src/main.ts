import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configEnv = await app.get(ConfigService);
  const PORT = configEnv.get<number>('API_PORT') || 3003;
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
bootstrap();
