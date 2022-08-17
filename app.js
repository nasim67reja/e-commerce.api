const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES
// Implement cors
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

///// 2. ROUTES:

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
