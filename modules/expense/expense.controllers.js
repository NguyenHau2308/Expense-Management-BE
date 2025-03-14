const Joi = require('@hapi/joi');
const expenseServices = require('./expense.services');

exports.getList = async (req, res, next) => {
  try {
    const expenses = await expenseServices.getList();
    res.json(expenses);
  } catch (e) {
    next(e);
  }
};

exports.create = async (req, res, next) => {
  try {
    const schema = Joi.object({
      title: Joi.string().required(),
      amount: Joi.number().required(),
      category: Joi.string().required(),
      date: Joi.date().optional(),
    }).validate(req.body);

    if (schema.error) return res.status(400).json({ error: schema.error.details[0].message });

    const newExpense = await expenseServices.create(req.body);
    res.json(newExpense);
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedExpense = await expenseServices.update(id, req.body);
    res.json(updatedExpense);
  } catch (e) {
    next(e);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await expenseServices.delete(id);
    res.json({ success: true, message: 'Khoản chi tiêu đã bị xóa' });
  } catch (e) {
    next(e);
  }
};
