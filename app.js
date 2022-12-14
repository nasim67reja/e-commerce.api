const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
// const path = require('path');

const cors = require('cors');
const AppError = require('./utlis/appError');
const globalErrorHandler = require('./controllers/errorController');

const productRouter = require('./routes/productRoutes');
// const userRouter = require('./routes/userRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const cartItemRouter = require('./routes/cartRoutes');
const orderRouter = require('./routes/orderRoutes');
const orderController = require('./controllers/orderController');

const app = express();

// 1) GLOBAL MIDDLEWARES

// Implement cors

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://nasim67reja.github.io',
      'https://nasim67reja.github.io/CareoCIty-ecommerce/',
    ],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

// const date = new Date(1671594782930);
// console.log(date);
//  express.raw({ type: 'application/json' });

app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  orderController.webhookCheckout
);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
// cookie parser
app.use(cookieParser());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  })
);

//  Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

///// 2. ROUTES:

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/carts', cartItemRouter);
app.use('/api/v1/orders', orderRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
