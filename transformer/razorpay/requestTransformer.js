const {generateUniqueId} = require('../../utils/uniqueIdGenerator.js');
const { validateCreateOrder, validateFetchOrder, validateCreateRefundRazorpay, validateFetchRefundRazorpay, validateFetchMultipleRefundsRazorpay, validateCapturePaymentRazorpay, validateFetchPaymentRazorpay, validateFetchAllOrderPayments } = require('../../utils/validator.js');

//-----------------------------------------------------------------------------
//Order Mapping Function
exports.mapToRazorpayCreateOrder = (standardRequest) => {
    validateCreateOrder(standardRequest);
    const {currency, amount, customer, receipt, metaData} = standardRequest;
    return{
        currency: currency,
        amount: amount, 
        notes: {
            customerId : customer.id || generateUniqueId(),
            customerName: customer.name,
            customerEmail: customer.email,
            customerPhone: customer.phone,
        },
        receipt: receipt !==undefined ? receipt : generateUniqueId(),
        partial_payment: metaData.partialPayment !== undefined ? metaData.partialPpayment : null,
        first_payment_min_amount: (metaData.partialPayment && metaData.firstPaymentMinAmount)
            ? metaData.firstPaymentMinAmount : null
    };
}

exports.mapToRazorpayFetchOrder = (standardRequest) => {
    validateFetchOrder(standardRequest);
    const id = standardRequest;
    return id;
}

exports.mapToRazorpayFetchAllOrder = (standardRequest) => {
    const {authorized, receipt, from, to, count,skip} = standardRequest || {};
    return{
        authorized: authorized || null,
        receipt: receipt || null,
        from: from || null,
        to: to || null,
        count: count || 10,
        skip: skip || null
    };
}
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
//Refund Mapping Function
exports.mapToRazorpayCreateRefund = (standardRequest) => {
    validateCreateRefundRazorpay(standardRequest);
    const { paymentId, refundId,options }=standardRequest;

    return {
        paymentId:paymentId,
        options:{
            amount:options.amount,
            receipt:refundId||null,
            speed:options.speed|| null,
            notes:options.notes||null
        }
    };
};

exports.mapToRazorpayFetchRefund = (standardRequest) => {
    validateFetchRefundRazorpay(standardRequest);
    const {paymentId, refundId}=standardRequest;
    return {
        paymentId:paymentId,
        refundId:refundId
    };
};

exports.mapToRazorpayFetchMultipleRefund = (standardRequest) => {
    validateFetchMultipleRefundsRazorpay(standardRequest);
    const { paymentId , options }= standardRequest;
    return {
        paymentId:paymentId,
        options:{
            from: options.from || null,
            to: options.to || null,
            count: options.count || 10,
            skip: options.skip || null
        }
    };
};

exports.mapToRazorpayFetchAllRefund = (standardRequest) => {
    const {from, to, count,skip} = standardRequest || {};
    return{
        from: from || null,
        to: to || null,
        count: count || 10,
        skip: skip || null
    };
};
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
//Payment Mapping Functions
exports.mapToRazorpayCapturePayment = (standardRequest) => {
    validateCapturePaymentRazorpay(standardRequest);
    const {paymentId, amount, currency} = standardRequest;
    return {
        paymentId: paymentId,
        amount: amount,
        currency: currency
    };
};

exports.mapToRazorpayFetchPayment = (standardRequest) => {
    validateFetchPaymentRazorpay(standardRequest);
    const {paymentId} = standardRequest;
    return {
        paymentId: paymentId
    };
};

exports.mapToRazorpayFetchAllOrderPayments = (standardRequest) => {
    validateFetchAllOrderPayments(standardRequest);
    const {orderId} = standardRequest;
    return {
        orderId: orderId
    };
};

exports.mapToRazorpayFetchAllPayments = (standardRequest) => {
    const {from, to, count,skip} = standardRequest || {};
    return{
        from: from || null,
        to: to || null,
        count: count || 10,
        skip: skip || null
    };
};

