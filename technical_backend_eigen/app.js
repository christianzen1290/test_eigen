const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { swaggerUi, specs } = require('./swaggerConfig'); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Middleware
app.use(bodyParser.json());

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Terjadi Kesalahan pada Server');
});

app.listen(port, () => {
  console.log(`Server berjalan di port : ${port}`);
});
