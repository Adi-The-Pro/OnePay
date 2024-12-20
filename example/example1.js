const OnePay = require('../services/paymentService')

const config = {
    provider : '*****************',
    apiKey : '*******************',
    apiSecret : '****************',
}

const instance = new OnePay(config);

//Supporing Gateways : Razorpay , Cashfree
//Example on how to use our unified payments gateway
async function createOrder(){
    const data = {
        amount:null,
        currency:null,
        customer:{
            name : null,
            email : null,
            phone : null,
        },
        metaData:{
        }
    }
    const res = await instance.createOrder(data);
    return res;
}

async function fetchOrder(){
    const orderId = null;
    const res = await instance.fetchOrder(orderId);
    return res;
}

async function fetchAllOrder(){
    const res = await instance.fetchAllOrder();
    return res;
}

async function createRefund(){
    const data={
        orderId:null,
        paymentId:null,
        options:{
            amount:null,
            refundId:null,
            speed:null,
            notes:{
            }
        }
    }
    const res = await instance.createRefund(data);
    return res;
}

async function fetchRefund(){
    const data={
        paymentId:null,
        orderId:null,
        refundId:null
    }
    const res = await instance.fetchRefund(data);
    return res;
}

async function fetchMultipleRefund(){
    const data={
        paymentId:null,
        orderId:null,
        options:{
            from:null,
            to:null,
            skip:null,
            count:null
        }
    }
    const res = await instance.fetchMultipleRefund(data);
    return res;
}

async function fetchAllRefund(){
    const data={
        from:null,
        to:null,
        skip:null,
        count:null
    }
    const res = await instance.fetchAllRefund(data);
    return res;
}

async function capturePayment(){
    const data={
        paymentId:null,
        orderId:null,
        amount:null,
        currency:null,
        action:null,
    }
    const res = await instance.capturePayment(data);
    return res;
}

async function fetchPayment(){
    const data={
        paymentId:null,
        orderId:null,
    }
    const res = await instance.fetchPayment(data);
    return res;
}

async function fetchAllOrderPayments(){
    const data={
        orderId:null,
    }
    const res = await instance.fetchAllOrderPayments(data);
    return res;
}

async function fetchAllPayments(){
    const data={
        from:null,
        to:null,
        skip:null,
        count:null
    }
    const res = await instance.fetchAllPayments(data);
    return res;
}
