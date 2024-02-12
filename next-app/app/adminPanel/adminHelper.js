export const emailTemplate = (order, products) => {
    return `Dear ${order.firstName} ${order.lastName},

    I hope this email finds you well. We wanted to take a moment to express our gratitude for your recent order of "${products.map(product => product.heading)}" from Clen Peak Performance. Your support means the world to us, and we're thrilled that you've chosen us for your athletic & health needs.
    
    **IMPORTANT**
    Here at Clen Peak Performance, we take pride in delivering top-quality products and excellent service to our valued customers. Your order has been processed and it will be on its way to you AFTER the Bank Transfer CONFIRMATION. You can expect it to arrive by 2-5 business days in Europe or 12-15 in the rest of the World. We've also included your order details below for your reference:

    HERE IS THE PAYMENT INFORMATION:

        Bank Name: Wise
        Account Holder: Damyan Petkov
        IBAN: BE29 9672 0928 7364
        BIC/SWIFT: TRWIBEB1XXX
        Bank Address: floor 3, Rue Du Trone 100, Brussels, 1050
        Reference/Remark: ${order._id}
        AMOUNT (including shipping cost): ${Number(order.orderInfo.finalPrice).toFixed(2)} €
    
    ORDER NUMBER: ${order._id}
    ${products.map(product => (
        `
        \nProduct: ${product.heading}
        Quantity: ${product.quantity}
        Price: ${product.price} €
        Total Price: ${Number(product.price * product.quantity).toFixed(2)} €
        Shipping Address: ${order.address}`
    
    ))}

    Final Price: ${Number(order.orderInfo.finalPrice).toFixed(2)} €

    If you have any questions, concerns, or need further assistance, our customer support team is always ready to help. You can reach us at clenpeakperformance@gmail.com.
    
    Once again, thank you for choosing Clen Peak Performance. We truly appreciate your trust and support. We look forward to serving you in the future, and we hope you enjoy your new product/s.
    
    Best regards,

    Clen Peak Performance
    clenpeakperformance.com`;
};

export const secondEmailTemplate = () => {
    return 'Once the transfer is complete, kindly send the transaction confirmation and your order number to our email and we will ship your order. \n\nIf you have any questions or require assistance with the Bank Transfer process, please feel free to reach out to us. We are here to ensure a seamless and secure shopping experience. \n\nThank you for choosing us, and we look forward to serving you with excellence. \n\nBest regards, \n\nClen peak Performance'
};