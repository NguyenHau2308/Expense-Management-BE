const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888; // cổng chạy server backend

app.use(cors());
// Để parse JSON request body (nếu cần):
app.use(express.json());

// Định nghĩa 1 route GET đơn giản
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend server đang chạy tại http://localhost:${port}`);
});
// aloalo
