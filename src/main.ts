import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });

  const config = new DocumentBuilder()
    .setTitle('Nextflix API')
    .setDescription('API Documentation for Nextflix project')
    .setVersion('1.0')
    .addTag('movies')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
