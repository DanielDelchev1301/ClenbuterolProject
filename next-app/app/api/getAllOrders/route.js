import { connectToDatabase } from "@/utils/database";
import Product from "@/models/product";

export const dynamic = 'force-dynamic';

export const GET = async () => {

    try {
        await connectToDatabase();
        const product = await Product.find();
        return new Response(JSON.stringify(product), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
    }
};