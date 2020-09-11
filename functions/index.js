const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HPvY9BTGrHv72vRVn2hBvarggSmT5Ol8EcnIQcpnAuUgRx0aiEsZpqUxgiOfKqOTZcpBHoexSRDfoHbBYRey12E0056WMiOtd");

//API

//App config 
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received, for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});


//Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-6176b/us-central1/api