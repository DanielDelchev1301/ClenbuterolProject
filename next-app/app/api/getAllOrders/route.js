import { connectToDatabase } from "@/utils/database";
import Product from "@/models/product";

export const GET = async () => {

    try {
        await connectToDatabase();
        const product = await Product.find();
        return new Response(JSON.stringify(product), {
            status: 200,
            headers: {
                'Cache-Control': 'no-store',
            }
        });
    } catch (error) {
        console.error(error);
    }
};