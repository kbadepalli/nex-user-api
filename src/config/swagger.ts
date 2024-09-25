import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import path from 'path';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API documentation for your application',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Local development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, '../routes/**/*.ts')], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

export const setupDocs = (app: Application) => {
  // Swagger UI route
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // ReDoc route
  app.get('/redoc', (req, res) => {
    res.sendFile(path.join(__dirname, '../../node_modules/redoc/bundles/redoc.standalone.html'));
  });

  // Optional: Redirect from /docs/redoc to /redoc
  app.get('/docs/redoc', (req, res) => {
    res.redirect('/redoc');
  });
};

// Export the Swagger specification for use elsewhere
export const swaggerDocs = swaggerSpec;
