const express = require('express');
const router = express.Router();
const expenseControllers = require('./expense.controllers');

router.get('/list', expenseControllers.getList);
router.post('/', expenseControllers.create);
router.put('/:id', expenseControllers.update);
router.delete('/:id', expenseControllers.delete);

module.exports = router;
