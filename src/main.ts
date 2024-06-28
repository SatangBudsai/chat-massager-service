import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    bodyParser: true,
  });

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);

  const config = new DocumentBuilder()
    .setTitle('Chat Massager App')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme();
  SwaggerModule.setup('', app, document, {
    customCss: theme.getBuffer(SwaggerThemeNameEnum.ONE_DARK),
    customSiteTitle: 'Chat Massager App – Documentation',
  });

  await app.listen(3000);
  const url = await app.getUrl();
  Logger.log(`Server listening: ${url}`);
}
bootstrap();
