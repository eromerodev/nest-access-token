import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

const options: SwaggerCustomOptions = {
  swaggerOptions: {
    displayRequestDuration: true,
  },
};

export class SwaggerBuilder {
  public static build(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Auth API')
      .setDescription('Generate JWT token for authentication')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document, options);
  }
}
