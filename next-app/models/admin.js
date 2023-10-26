import { Schema, model, models } from 'mongoose';

const adminSchema = new Schema({
    hashedPassword: {
        type: String,
        required: [true, 'Password is required']
    }
});

const Admin = models.Admin || model('Admin', adminSchema);

export default Admin;