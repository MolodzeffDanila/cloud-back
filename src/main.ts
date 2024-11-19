import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { returnSwaggerConfig } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDoc = returnSwaggerConfig(app);
  
  SwaggerModule.setup('swagger', app, swaggerDoc);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
