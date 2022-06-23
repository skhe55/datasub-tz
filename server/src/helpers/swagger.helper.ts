import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class SwaggerHelper {
  public integrationSwaggerDocs (applicationInstance) {
    const config = new DocumentBuilder()
      .setTitle('Payments API')
      .setDescription('Документация api приема платежей')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(applicationInstance, config, {
      ignoreGlobalPrefix: false
    });
    SwaggerModule.setup('/api-swagger', applicationInstance, document);
  }
}