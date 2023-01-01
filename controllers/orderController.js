const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const catchAsync = require('../utlis/catchAsync');
const Product = require('../models/productModel');
const User = require('../models/userModels');
const Order = require('../models/orderModel');
const factory = require('./handleFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  //   1) Get the currently ordered product
  const product = await Product.findById(req.params.productId);

  await Product.findByIdAndUpdate(
    product,
    { $inc: { sell: 1 } },
    {
      new: true,
      runValidators: true,
    }
  );

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    expand: ['line_items'],
    payment_method_types: ['card'],
    success_url: `https://nasim67reja.github.io/CareoCIty-ecommerce/`,
    cancel_url: `https://nasim67reja.github.io/CareoCIty-ecommerce/#/${product.categories}`,
    customer_email: req.user.email,
    client_reference_id: req.params.productId,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: product.price * 100,
          product_data: {
            name: `${product.name} `,
            description: product.summary,
            images: [
              `https://e-commerceapi.up.railway.app/Products/${product.categories}/${product.images[0]}`,
            ],
          },
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
  });

  // 3) Create session as response
  res.status(200).json({
    status: 'success',
    session,
  });
});

const createOrderCheckout = async (session) => {
  const product = session.client_reference_id;
  const user = (await User.findOne({ email: session.customer_email })).id;
  const price = session.amount_total / 100;

  // console.log(productR);

  await Order.create({ product, user, price });
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed')
    createOrderCheckout(event.data.object);

  res.status(200).json({ received: true });
};

exports.createOrder = factory.createOne(Order);
exports.getOrder = factory.getOne(Order);
exports.getAllOrders = factory.getAll(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
