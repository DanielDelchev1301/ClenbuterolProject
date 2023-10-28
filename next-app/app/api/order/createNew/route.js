import { connectToDatabase } from "@/utils/database";
import Product from "@/models/product";

export const POST = async (req) => {
    const body = await req.json();

    try {
        await connectToDatabase();
        const product = await Product.create(body);
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