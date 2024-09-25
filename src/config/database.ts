import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.RDS_DB_NAME || 'your_rds_database_name',
  process.env.RDS_DB_USER || 'your_rds_username',
  process.env.RDS_DB_PASSWORD || 'your_rds_password',
  {
    host: process.env.RDS_DB_HOST || 'your-rds-endpoint.rds.amazonaws.com',
    dialect: 'postgres',
    port: parseInt(process.env.RDS_DB_PORT || '5432', 10),
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the RDS PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the RDS PostgreSQL:', error);
  }
};
