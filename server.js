require('dotenv').config(); // Load biến môi trường từ .env
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // Import PostgreSQL

const app = express();
const port = process.env.PORT || 8888;

// Kết nối PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432, // Cổng mặc định của PostgreSQL
});

pool.connect()
  .then(() => console.log('PostgreSQL connected successfully!'))
  .catch(err => console.error('PostgreSQL connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Route kiểm tra server
app.get('/', (req, res) => {
  res.send('Backend is running with PostgreSQL!');
});

// Route API test
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Route kiểm tra kết nối PostgreSQL
app.get('/api/db-status', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()'); // Test truy vấn DB
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Backend server đang chạy tại http://localhost:${port}`);
});