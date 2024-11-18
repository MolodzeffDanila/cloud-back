import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const returnSwaggerConfig = (app: INestApplication<any>) => {
    const config = new DocumentBuilder()
    .setTitle('Cloud back-end service')
    .setDescription('Cloud backend API description.')
    .setVersion('1.0.0')
    .build();
    return () => SwaggerModule.createDocument(app, config);
}