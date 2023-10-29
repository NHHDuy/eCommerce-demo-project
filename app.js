// Web server Entry point
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3030;

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './server/resources/views');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})