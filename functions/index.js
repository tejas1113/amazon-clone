const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KclzqSACJq7xwFlrtBF153IUB" +
    "v2ZLqPHbn3RNP2ySoN5i" +
    "iA1Qgq0x7mrqJZAWq1VeISW3MVCabS94yJ9YGAUcgv00Y3vBDl2E"
);

//  API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send("hello world!");
});
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: "total",
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/amzclone-tejas/us-central1/api
