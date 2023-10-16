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
    mobilePhone: {
        type: String,
    },
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;