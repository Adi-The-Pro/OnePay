const Razorpay = require('razorpay');
const PaymentGateway = require('./baseGateway');
const requestMapper = require('../transformer/razorpay/requestTransformer.js');

class RazorpayGateway extends PaymentGateway {
    constructor(apiKey, apiSecret) {
        super();
        this.razorpay = new Razorpay({
            key_id: apiKey,
            key_secret: apiSecret,
        });
    }

//------------------------------------------------------------------------
//Order Related Funtions
    async createOrder(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayCreateOrder(data);
            const res = await this.razorpay.orders.create(mapRequest);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchAllOrder(data) {
        try{
            const mapRequest = requestMapper.mapToRazorpayFetchAllOrder(data);
            const res = await this.razorpay.orders.all(mapRequest);
            return res;
        }catch(error){
            console.log(error);
        }
    }

    async fetchOrder(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchOrder(data);
            const res = await this.razorpay.orders.fetch(mapRequest);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
//------------------------------------------------------------------------


//------------------------------------------------------------------------
//Refund Related Funtions
    async createRefund(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayCreateRefund(data);
            const res = await this.razorpay.payments.refund(mapRequest.paymentId, mapRequest.options);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchRefund(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchRefund(data);
            const res = await this.razorpay.payments.fetchRefund(mapRequest.paymentId, mapRequest.refundId);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchMultipleRefund(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchMultipleRefund(data);
            const res = await this.razorpay.payments.fetchMultipleRefund(mapRequest.paymentId, mapRequest.options);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchAllRefund(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchAllRefund(data);
            const res = await this.razorpay.refunds.all(mapRequest);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
//------------------------------------------------------------------------


//------------------------------------------------------------------------
//Payement Related Funtions 
    async capturePayment(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayCapturePayment(data);
            const res = await this.razorpay.payments.capture(mapRequest.paymentId, mapRequest.amount, mapRequest.currency);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchPayment(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchPayment(data);
            const res = await this.razorpay.payments.fetch(mapRequest.paymentId);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchAllOrderPayments(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchAllOrderPayments(data);
            const res = await this.razorpay.orders.fetchPayments(mapRequest.orderId);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchAllPayments(data) {
        try {
            const mapRequest = requestMapper.mapToRazorpayFetchAllPayments(data);
            const res = await this.razorpay.payments.all(mapRequest);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = {RazorpayGateway};
