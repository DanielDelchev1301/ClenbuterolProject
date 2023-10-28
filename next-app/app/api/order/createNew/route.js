import { connectToDatabase } from "@/utils/database";
import Product from "@/models/product";

export const dynamic = 'force-dynamic';

export const POST = async (req) => {
    const body = await req.json();

    try {
        await connectToDatabase();
        const product = await Product.create(body);
        return new Response(JSON.stringify(product), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
    }
};