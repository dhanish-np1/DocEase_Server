import dotenv from 'dotenv';
dotenv.config();


export const config = {
    server: {
      port: process.env.PORT || 3000,
    },
    database: {
      uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/DocEase',
    },
  };
  