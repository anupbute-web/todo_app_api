require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const Todo = require('./models/Todo');
const app = express();
const port =4040;

connectDB();

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.post('/add', async (req, res) => {
  const { title, priority } = req.body;
  if (title) {
    await Todo.create({ title, priority });
  }
  res.redirect('/');
});  
 
app.get('/edit/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.render('edit', { todo });
});

app.put('/edit/:id', async (req, res) => {
  const { title, priority } = req.body;
  await Todo.findByIdAndUpdate(req.params.id, { title, priority });
  res.redirect('/');
});
app.delete('/delete/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
});
app.listen(port, () => {
  console.log(`Server running`);
});
