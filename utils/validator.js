exports.validateCreateOrder = (data) => {
    if(!data.currency || !data.amount || !data.customer || !data.customer.name ||!data.customer.email || 
        !data.customer.phone){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateFetchOrder = (data) => {
    if(!data){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateCreateRefundRazorpay=(data)=>{
    if(!data.paymentId || !data.options ||!data.options.amount ){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateCreateRefundCashfree=(data)=>{
    if(!data.orderId || !data.options || !data.options.amount){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateFetchRefundRazorpay=(data)=>{
    if(!data.paymerntId || !data.refundId){
          throw new Error('MandatoryField is missing');

    }
}

exports.validateFetchRefundCashfree=(data)=>{
    if(!data.orderId || !data.refundId){
          throw new Error('MandatoryField is missing');

    }
}

exports.validateFetchMultipleRefundsRazorpay=(data)=>{
    if(!data.paymentId){
        throw new Error('MandatoryField is missing');

  }
}

exports.validateFetchMultipleCashfree=(data)=>{
    if(!data.orderId){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateCapturePaymentRazorpay=(data)=>{
    if(!data.paymentId || !data.amount || !data.currency){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateCapturePaymentCashfree=(data)=>{
    if(!data.orderId || !data.amount){
        throw new Error('MandatoryField is missing');
    }

}

exports.validateFetchPaymentRazorpay=(data)=>{
    if(!data.paymentId){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateFetchPaymentCashfree=(data)=>{
    if(!data.orderId || !data.paymentId){
        throw new Error('MandatoryField is missing');
    }
}

exports.validateFetchAllOrderPayments=(data)=>{
    if(!data.orderId){
        throw new Error('MandatoryField is missing');
    }
}