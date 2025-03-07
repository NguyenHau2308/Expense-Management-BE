const app = require('./app'); // Import app.js
const pool = require('./db'); // Import kết nối PostgreSQL
const port = process.env.PORT || 8888;

// Route kiểm tra server
app.get('/', (req, res) => {
  res.send('Backend is running with PostgreSQL!');
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