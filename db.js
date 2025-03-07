require('dotenv').config();
const { Pool } = require('pg'); // Import PostgreSQL

// Kết nối đến PostgreSQL từ .env
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Cổng mặc định của PostgreSQL
});

pool.connect()
  .then(() => console.log('✅ PostgreSQL connected successfully!'))
  .catch(err => console.error('❌ PostgreSQL connection error:', err));

module.exports = pool; // Export kết nối để dùng trong service
