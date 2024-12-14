const express = require('express');
const paymentService = require('./services/paymentService');

const razorPayConfig = {
    provider : 'razorpay',
    apiKey : '******************',
    apiSecret : '*****************',
}

const cashFreeConfig = {
    provider : 'cashfree',
    apiKey : '****************',
    apiSecret : '**************',
}

let config = razorPayConfig;

//Creating an instance according to the "provider"
const instance = new paymentService(config);


//All the available instance (methods) example are there in testFile....so do check it out 🙂
//Example creating a new order for razorpay, and same function can be used for other gateways
const res = instance.createOrder({    
    amount:100,
    currency:'INR',
    customer:{
        name : 'Adam',
        email : 'adam@gmail.com',
        phone : '8888888888',
    },
    metaData:{
        returnUrl: null,
        notifyUrl: null,
        paymentMethod : null || [],
        partialPayment : null,
        firstPaymentMinAmount : null
    }
})

console.log(res);



