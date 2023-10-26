import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    country: {
        type: String,
        required: [true, 'Country is required'],
    },
    city: {
        type: String,
        required: [true, 'City is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    zipCode: {
        type: String,
        required: [true, 'Zip/Postal code is required'],
    },
    orderInfo: {
        products: [
            {
                heading: {
                    type: String,
                    required: [true, 'Heading is required'],
                },
                price: {
                    type: String,
                    required: [true, 'Price is required'],
                },
                quantity: {
                    type: String,
                    required: [true, 'Quantity is required'],
                },
            }
        ],
        finalPrice: {
            type: String,
            required: [true, 'Final price is required'],
        },
        date: {
            type: Date,
            required: [true, 'Date is required'],
        },
        status: {
            type: String,
            required: [true, 'Status is required'],
        },
    }
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;