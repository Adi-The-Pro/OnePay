// utils/validator.js

// Validate if a given value is a valid amount (positive number)
const validateAmount = (amount) => {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Invalid amount. Amount should be a positive number.');
    }
  };
  
  // Validate if a given string is a valid transaction ID (for example, alphanumeric)
  const validateTransactionId = (transactionId) => {
    const regex = /^[A-Za-z0-9]+$/; // Alphanumeric check
    if (!regex.test(transactionId)) {
      throw new Error('Invalid transaction ID format.');
    }
  };
  
  // Validate if a given string is a valid currency code (e.g., USD, INR)
  const validateCurrency = (currency) => {
    const supportedCurrencies = ['USD', 'INR', 'EUR']; // Example supported currencies
    if (!supportedCurrencies.includes(currency)) {
      throw new Error('Unsupported currency code.');
    }
  };
  
  // Validate payment method (for example, whether it's a valid payment gateway type)
  const validatePaymentMethod = (paymentMethod) => {
    const validMethods = ['razorpay', 'stripe', 'paypal'];
    if (!validMethods.includes(paymentMethod)) {
      throw new Error('Invalid payment method. Supported methods are razorpay, stripe, paypal.');
    }
  };
  
  // Validate data for creating a payment
  const validatePaymentData = (data) => {
    const { amount, currency, paymentMethod } = data;
    
    // Call validation functions
    validateAmount(amount);
    validateCurrency(currency);
    validatePaymentMethod(paymentMethod);
  };
  
  // Exporting validation functions
  module.exports = {
    validateAmount,
    validateTransactionId,
    validateCurrency,
    validatePaymentMethod,
    validatePaymentData
  };
  