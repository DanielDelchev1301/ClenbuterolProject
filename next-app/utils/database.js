import mongoose from 'mongoose';

// let isConnected = false;

export const connectToDatabase = async () => {
    // if (isConnected) {
    //     console.log('MongoDB is already connected');
    //     return;
    // }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'clenbuterolProject',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    
        // isConnected = true;
        
        console.log('MongoDB is connected');
    } catch (error) {
        console.error(error);
    }
};