const { CashfreeGateway } = require('../gateways/cashfree.js');
const { RazorpayGateway } = require('../gateways/razorpay.js');

class OnePay{
  //Constructor
  constructor(config){
    const {provider, apiKey, apiSecret, clientSecret} = config;
    
    this.provider = provider;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.clientSecret = clientSecret;

    if(provider==='razorpay'){
      if(!apiSecret || !apiKey){
        throw new Error('Razorpay requires an API secret.');
      }
      else{
        this.gateway = new RazorpayGateway(apiKey, apiSecret);
      }
    }
    
    else if(provider==='cashfree'){
      if(!apiSecret || !apiKey){
        throw new Error('Paytm requires an API secret.');
      }
      else{
        this.gateway = new CashfreeGateway(apiKey, apiSecret);
      }
    }
  }
    

//------------------------------------------------------------------------
//Order Related Funtions 
async createOrder(data) {
  try{
    return await this.gateway.createOrder(data);
  } catch (error) {
    throw new Error(`Payment Error: ${error.message}`);
    }
  }

  async fetchOrder(data) {
    try{
      return await this.gateway.fetchOrder(data);
    }catch(error){
      throw new Error(`Payment Error: ${error.message}`);
    }
  }
  
  async fetchAllOrder(data){
    try{
      if(this.provider==='cashfree'){
        return new Error('This method is not supported in the selected payment gateway');
      }
      else{
        return await this.gateway.fetchAllOrder(data);
      }
    }catch(error){
      throw new Error(`Payment Error: ${error.message}`);
    }
  }
//------------------------------------------------------------------------


//------------------------------------------------------------------------
//Refund Related Funtions   
  async createRefund(data) {
    try {
      return await this.gateway.createRefund(data);
    } catch (error) {
      throw new Error(`Refund Error: ${error.message}`);
    }
  }
  
  async fetchRefund(data) {
    try {
      return await this.gateway.fetchRefund(data);
    } catch (error) {
      throw new Error(`Refund Error: ${error.message}`);
    }
  }

  async fetchMultipleRefund(data) {
    try {
      return await this.gateway.fetchMultipleRefund(data);
    } catch (error) {
      throw new Error(`Refund Error: ${error.message}`);
    }
  }

  async fetchAllRefund(data){
    try{
      if(this.provider==='cashfree'){
        return new Error('This method is not supported in the selected payment gateway');
      }
      else{
        return await this.gateway.fetchAllRefund(data);
      }
    }catch(error){
      throw new Error(`Payment Error: ${error.message}`);
    }
  }
//------------------------------------------------------------------------


//------------------------------------------------------------------------
//Payement Related Funtions   
  async capturePayment(data) {
    try {
      return await this.gateway.capturePayment(data);
    } catch (error) {
      throw new Error(`Refund Error: ${error.message}`);
    }
  }

  async fetchPayment(data) {
    try {
      return await this.gateway.fetchPayment(data);
    } catch (error) {
      throw new Error(`Refund Error: ${error.message}`);
    }
  }

  async fetchAllOrderPayments(data) {
    try {
      return await this.gateway.fetchAllOrderPayments(data);
    } catch (error) {
      throw new Error(`Refund Error: ${error.message}`);
    }
  }

  async fetchAllPayments(data){
    try{
      if(this.provider==='cashfree'){
        return new Error('This method is not supported in the selected payment gateway');
      }
      else{
        return await this.gateway.fetchAllPayments(data);
      }
    }catch(error){
      throw new Error(`Payment Error: ${error.message}`);
    }
  }
}

module.exports = {OnePay};
