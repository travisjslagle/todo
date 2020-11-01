const express = require('express');
const app = express();
const sequelize = require('./db');
const Todo = require('./db').import('./models/todo');

sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));

app.get("/todos", async (req, res) => {
    Todo.findAll()
      .then((todos) => res.json(todos))
      .catch((err) => res.json({ error: err }));
  });

app.get("/active", async (req, res) => {
  Todo.findAll({
    where: { completed: false }
  })
    .then((todos) => res.json(todos))
    .catch((err) => res.json({ error: err }))
})

app.post("/create", async (req, res) => {
  const newTodo = {
    name: req.body.todo.name,
    completed: req.body.todo.completed,
    sort: req.body.todo.sort,
    category: req.body.todo.category,
    due: req.body.todo.due
  }
  Todo.create(newTodo)
    .then((todo) => res.json(todo))
    .catch((err) => res.json({ error: err }))
})

app.put("/update/:entryId", async (req, res) => {
  const updateTodo = {
    name: req.body.todo.name,
    completed: req.body.todo.completed,
    sort: req.body.todo.sort,
    category: req.body.todo.category,
    due: req.body.todo.due
  }
  const query = { where: { id: req.params.entryId }};

  Todo.update(updateTodo, query)
    .then((todos) => res.json(todos))
    .catch((err) => res.json({ error: err }))
})

app.listen(5000, () => {
  console.log('Server is running on 5000')
})