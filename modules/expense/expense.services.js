const knex = require('../../db'); // Lưu ý đường dẫn tới `db.js`

exports.getList = async () => {
  return knex('expenses').select('*').orderBy('date', 'desc');
};

exports.create = async (data) => {
  const [newExpense] = await knex('expenses').insert(data).returning('*');
  return newExpense;
};

exports.update = async (id, data) => {
  const [updatedExpense] = await knex('expenses')
    .where({ id })
    .update({ ...data, updated_at: knex.fn.now() })
    .returning('*');
  return updatedExpense;
};

exports.delete = async (id) => {
  return knex('expenses').where({ id }).del();
};
