import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  // ❌ Disable Swagger in production
  if (process.env.NODE_ENV === 'production') return;

  const port = process.env.PORT ?? 3000;

  const config = new DocumentBuilder()
    .setTitle('Shopping Cart API')
    .setDescription('API documentation for Shopping Cart project')
    .setVersion('1.0')

    // ✅ Multiple servers
    .addServer(`http://localhost:${port}`, 'Local')
    .addServer('https://api.yourdomain.com', 'Production')

    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // ✅ Swagger route
  SwaggerModule.setup('swagger', app, document);
}