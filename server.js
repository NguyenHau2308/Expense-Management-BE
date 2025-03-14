const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888;

app.use(cors());
app.use(express.json());

// Route mặc định để kiểm tra server có hoạt động không
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Route API test
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend server đang chạy tại http://localhost:${port}`);
});