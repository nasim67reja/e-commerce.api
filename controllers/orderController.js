const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const catchAsync = require('../utlis/catchAsync');
const Product = require('../models/productModel');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  //   1) Get the currently ordered product
  const product = await Product.findById(req.params.productId);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    expand: ['line_items'],
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}/`,
    cancel_url: `${req.protocol}://${req.get('host')}/${product.categories}`,
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
              `${req.protocol}://${req.get('host')}/Products/to/${
                product.images[0]
              }`,
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
