const {generateUniqueId} = require('../../utils/uniqueIdGenerator.js');
const { validateCreateOrder, validateFetchOrder, validateCreateRefundCashfree, validateFetchRefundCashfree, validateFetchMultipleCashfree, validateCapturePaymentCashfree, validateFetchPaymentCashfree, validateFetchAllOrderPayments } = require('../../utils/validator.js');


//-----------------------------------------------------------------------------
//Order Mapping Function
exports.mapToCashfreeCreateOrder = (standardRequest) => {
    validateCreateOrder(standardRequest);
    const {currency, amount, customer, receipt, metaData} = standardRequest;
    return {
        order_id: receipt || generateUniqueId(),
        order_amount: amount,
        order_currency: currency,
        customer_details:{
            customer_id: customer.id || generateUniqueId(),
            customer_name: customer.name,
            customer_email: customer.email,
            customer_phone: customer.phone
        },
        order_meta:{
            return_url : metaData?.returnUrl || null,
            notify_url : metaData?.notifyUrl || null,
            payment_methods : metaData?.paymentMethods || null
        }
    };
}

exports.mapToCashfreeFetchOrder = (standardRequest) => {
    validateFetchOrder(standardRequest);
    const id = standardRequest;
    return id;
}
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
//Refund Mapping Function
exports.mapToCashfreeCreateRefund = (standardRequest) => {
    validateCreateRefundCashfree(standardRequest);
    const {orderId, refundId, options}=standardRequest;

    return {
        orderId:orderId,
        options:{
            refund_amount:options.amount,
            refund_id:refundId||generateUniqueId(),
            refund_speed:options.speed||null,
            refund_note:options.notes.note1|| null,
        }
    };
}

exports.mapToCashfreeFetchRefund = (standardRequest) => {
    validateFetchRefundCashfree(standardRequest);
    const {orderId, refundId}=standardRequest;
    return {
        orderId:orderId,
        refundId:refundId
    };
}

exports.mapToCashfreeFetchMultipleRefund = (standardRequest) => {
    validateFetchMultipleCashfree(standardRequest);
    const {orderId}= standardRequest

    return {
        orderId:orderId
    }
}
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
//Payment Mapping Function
exports.mapToCashfreeCapturePayment = (standardRequest) => {
    validateCapturePaymentCashfree(standardRequest);
    const {orderId, amount, action} = standardRequest;
    return {
        orderId:orderId,
        options:{
            action: action || 'CAPTURE',
            amount: amount
        }
    };
}

exports.mapToCashfreeFetchPayment = (standardRequest) => {
    validateFetchPaymentCashfree(standardRequest);
    const {paymentId, orderId} = standardRequest;
    return {
        orderId: orderId,
        paymentId: paymentId
    };
}

exports.mapToCashfreeFetchAllOrderPayments = (standardRequest) => {
    validateFetchAllOrderPayments(standardRequest);
    const {orderId} = standardRequest;
    return {
        orderId: orderId
    };
}
