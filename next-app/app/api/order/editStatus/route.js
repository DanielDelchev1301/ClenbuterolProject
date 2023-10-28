import { connectToDatabase } from "@/utils/database";
import Product from "@/models/product";

export const dynamic = 'force-dynamic';

export const PUT = async (req) => {
    const {orderInfo, _id} = await req.json();

    try {
        await connectToDatabase();
        const product = await Product.findByIdAndUpdate(_id, {orderInfo}, {new: true});
        return new Response(JSON.stringify(product), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
    }
};