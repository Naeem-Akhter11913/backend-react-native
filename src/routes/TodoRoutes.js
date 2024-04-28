const express = require('express');
const { testRoute, addTodo, getAllTodos, updateTodo, delteTode, getOneData } = require('../controllers/TodoControllers');

const route = express.Router()

route.get('/test', testRoute);
route.post('/add-todo', addTodo);
route.get('/get-todo', getAllTodos);
route.put('/update-todo', updateTodo);
route.delete('/delete-todo', delteTode);
route.get('/one-todo', getOneData);

module.exports = route