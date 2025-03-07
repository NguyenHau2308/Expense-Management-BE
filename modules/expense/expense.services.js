const pool = require('../../db'); // Import kết nối DB từ db.js

exports.getList = async () => {
  const { rows } = await pool.query('SELECT * FROM expenses ORDER BY date DESC');
  return rows;
};

exports.create = async (data) => {
  const { title, amount, category, date } = data;
  const { rows } = await pool.query(
    'INSERT INTO expenses (title, amount, category, date) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, amount, category, date || new Date()]
  );
  return rows[0];
};

exports.update = async (id, data) => {
  const { title, amount, category, date } = data;
  const { rows } = await pool.query(
    'UPDATE expenses SET title = $1, amount = $2, category = $3, date = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
    [title, amount, category, date, id]
  );
  return rows[0];
};

exports.delete = async (id) => {
  await pool.query('DELETE FROM expenses WHERE id = $1', [id]);
};
