![Logo](https://github.com/user-attachments/assets/5df6ded2-a6ec-4e6b-98a3-17f2b16757a0)

# One-Pay
A versatile NPM library designed to simplify payment gateway integration for Razorpay and Cashfree. One-Pay allows developers to perform payments, refunds, and other operations with minimal effort, eliminating the need for extensive boilerplate code. It's the ultimate tool for seamless transaction management in your applications.


## How To Use

```bash
const {OnePay} = require('one-pay')

const config = {
    provider : '*', // Specify the provider (e.g., 'Razorpay', 'Cashfree')
    apiKey : '*', // Your API Key
    apiSecret : '', // Your API Secret
}

const instance = new OnePay(config);
```


##  Methods Available

### 1. Create an Order
Create a new order in the payment gateway.

```bash
async function createOrder() {
    const data = {
        amount: null, // Amount for the order
        currency: null, // Currency (e.g., 'INR', 'USD')
        customer: {
            name: null, // Customer's name
            email: null, // Customer's email
            phone: null, // Customer's phone
        },
        metaData: {}, // Additional metadata for the order
    };
    const res = await instance.createOrder(data);
    return res;
}
```

### 2. Fetch an Order
Fetch details of a specific order using its ID.

```bash
async function fetchOrder() {
    const orderId = null; // The ID of the order to fetch
    const res = await instance.fetchOrder(orderId);
    return res;
}
```


### 3. Fetch All Orders
Retrieve all orders created in the system.

```bash
async function fetchAllOrder() {
    const res = await instance.fetchAllOrder();
    return res;
}
```

### 4. Create a Refund
Initiate a refund for a specific payment or order.

```bash
async function createRefund() {
    const data = {
        orderId: null, // ID of the order
        paymentId: null, // ID of the payment
        options: {
            amount: null, // Refund amount
            refundId: null, // Optional refund ID
            speed: null, // Speed of refund (e.g., 'normal', 'instant')
            notes: {}, // Additional notes for the refund
        },
    };
    const res = await instance.createRefund(data);
    return res;
}
```

### 5. Fetch a Refund
Fetch details of a specific refund.

```bash
async function fetchRefund() {
    const data = {
        paymentId: null, // Payment ID associated with the refund
        orderId: null, // Order ID associated with the refund
        refundId: null, // ID of the refund
    };
    const res = await instance.fetchRefund(data);
    return res;
}
```


### 6. Fetch Multiple Refunds
Retrieve multiple refunds for a specific payment or order.

```bash
async function fetchMultipleRefund() {
    const data = {
        paymentId: null, // Payment ID
        orderId: null, // Order ID
        options: {
            from: null, // Start date/time
            to: null, // End date/time
            skip: null, // Number of records to skip
            count: null, // Number of records to fetch
        },
    };
    const res = await instance.fetchMultipleRefund(data);
    return res;
}
```

### 7. Fetch All Refunds
Retrieve all refunds in the system.

```bash
async function fetchAllRefund() {
    const data = {
        from: null, // Start date/time
        to: null, // End date/time
        skip: null, // Number of records to skip
        count: null, // Number of records to fetch
    };
    const res = await instance.fetchAllRefund(data);
    return res;
}
```

### 8. Capture a Payment
Capture a payment for an order.

```bash
async function capturePayment() {
    const data = {
        paymentId: null, // Payment ID to capture
        orderId: null, // Order ID associated with the payment
        amount: null, // Amount to capture
        currency: null, // Currency of the payment
        action: null, // Capture action
    };
    const res = await instance.capturePayment(data);
    return res;
}
```

### 9. Fetch a Payment
Fetch details of a specific payment.
```bash
async function fetchPayment() {
    const data = {
        paymentId: null, // Payment ID
        orderId: null, // Order ID associated with the payment
    };
    const res = await instance.fetchPayment(data);
    return res;
}
```

### 10. Fetch All Payments for an Order
Retrieve all payments for a specific order.

```bash
async function fetchAllOrderPayments() {
    const data = {
        orderId: null, // Order ID
    };
    const res = await instance.fetchAllOrderPayments(data);
    return res;
}
```

### 11. Fetch All Payments
Retrieve all payments in the system.

```bash
async function fetchAllPayments() {
    const data = {
        from: null, // Start date/time
        to: null, // End date/time
        skip: null, // Number of records to skip
        count: null, // Number of records to fetch
    };
    const res = await instance.fetchAllPayments(data);
    return res;
}
```
