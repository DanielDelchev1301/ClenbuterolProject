export const emailTemplate = (order, products) => {
    return `Dear ${order.firstName} ${order.lastName},

    I hope this email finds you well. We wanted to take a moment to express our gratitude for your recent order of "${products.map(product => product.heading)}" from Clen Peak Performance. Your support means the world to us, and we're thrilled that you've chosen us for your athletic & health needs.
    
    Here at Clen Peak Performance, we take pride in delivering top-quality products and excellent service to our valued customers. Your order has been processed and is on its way to you. You can expect it to arrive by 2-4 business days. We've also included your order details below for your reference:
    
    ${products.map(product => (
        `
        \nOrder Number: ${order._id}
        Product: ${product.heading}
        Quantity: ${product.quantity}
        Price: ${product.price}
        Total Price: $${Number(product.price.substring(1) * product.quantity).toFixed(2)}
        Shipping Address: ${order.address}`
    
    ))}

    Final Price: $${Number(order.orderInfo.finalPrice).toFixed(2)}

    If you have any questions, concerns, or need further assistance, our customer support team is always ready to help. You can reach us at clenpeakperformance@gmail.com.
    
    Once again, thank you for choosing Clen Peak Performance. We truly appreciate your trust and support. We look forward to serving you in the future, and we hope you enjoy your new product/s.
    
    Best regards,

    Clen Peak Performance
    clenpeakperformance.com`;
};