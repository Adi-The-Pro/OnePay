//-----------------------------------------------------------------------------
//Order Response Mapping Function
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