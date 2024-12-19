const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Lấy tất cả ghi chú
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Thêm ghi chú mới
router.post('/', async (req, res) => {
  try {
    const { content } = req.body;
    const newNote = new Note({ content });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Xóa 1 ghi chú
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.json({ message: 'Đã xóa ghi chú' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
