const { Cashfree } = require('cashfree-pg');
const PaymentGateway = require('./baseGateway');
const requestMapper = require('../transformer/cashfree/requestTransformer.js');

class CashfreeGateway extends PaymentGateway {
    constructor(apiKey, apiSecret, environment = 'TEST') {
        super();
        // Configure Cashfree
        Cashfree.XClientId = apiKey;
        Cashfree.XClientSecret = apiSecret;
        Cashfree.XEnvironment = Cashfree.Environment[environment.toUpperCase()];
    }

    // Static API Version
    static API_VERSION = '2022-09-01';

//------------------------------------------------------------------------
//Order Related Funtions
    async createOrder(data) {
        try {
            const option = requestMapper.mapToCashfreeCreateOrder(data);
            const res = await Cashfree.PGCreateOrder(CashfreeGateway.API_VERSION, option);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchOrder(data) {
        try{
            const option = requestMapper.mapToCashfreeFetchOrder(data);
            const res = await Cashfree.PGFetchOrder(CashfreeGateway.API_VERSION, option);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
//------------------------------------------------------------------------


//------------------------------------------------------------------------
//Refund Related Funtions 
    async createRefund(data) {
        try {
            const mapRequest = requestMapper.mapToCashfreeCreateRefund(data);
            const res = await Cashfree.PGOrderCreateRefund(CashfreeGateway.API_VERSION, mapRequest.orderId, mapRequest.options);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchRefund(data) {
        try {
            const mapRequest = requestMapper.mapToCashfreeFetchRefund(data);
            const res = await Cashfree.PGOrderFetchRefund(CashfreeGateway.API_VERSION, mapRequest.orderId, mapRequest.refundId);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchMultipleRefund(data) {
        try {
            const mapRequest = requestMapper.mapToCashfreeFetchMultipleRefund(data);
            const res = await Cashfree.PGOrderFetchRefunds(CashfreeGateway.API_VERSION, mapRequest.orderId);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

//------------------------------------------------------------------------


//------------------------------------------------------------------------
//Payment Related Funtions
    async capturePayment(data) {
        try {
            const mapRequest = requestMapper.mapToCashfreeCapturePayment(data);
            const res = await Cashfree.PGAuthorizeOrder(CashfreeGateway.API_VERSION, mapRequest.orderId, mapRequest.options);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchPayment(data) {
        try {
            const mapRequest = requestMapper.mapToCashfreeFetchPayment(data);
            const res = await Cashfree.PGOrderFetchPayment(CashfreeGateway.API_VERSION, mapRequest.orderId, mapRequest.paymentId);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    async fetchAllOrderPayments(data) {
        try {
            const mapRequest = requestMapper.mapToCashfreeFetchAllOrderPayments(data);
            const res = await Cashfree.PGOrderFetchPayments(CashfreeGateway.API_VERSION, mapRequest.orderId);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = { CashfreeGateway };