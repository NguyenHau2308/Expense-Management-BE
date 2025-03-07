require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes từ modules
const expenseRoutes = require('./modules/expense/expense.routes');
app.use('/expense', expenseRoutes);

module.exports = app; // Xuất app ra để server.js sử dụng
