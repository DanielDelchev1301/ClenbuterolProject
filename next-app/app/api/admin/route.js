import { connectToDatabase } from "@/utils/database";
import bcrypt from "bcrypt";
import Admin from "@/models/admin";

export const dynamic = 'force-dynamic';

export const POST = async (req) => {
    const body = await req.json();

    try {
        await connectToDatabase();
        const _admin = await Admin.find();
        const isCorrect = await bcrypt.compare(body.password, _admin[0].hashedPassword); 
        if (!isCorrect) {
            throw { message: 'Wrong password'}
        }     
        return new Response(JSON.stringify('Successful Login!'), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
    }
};


// in case you want to create a new admin

// export const POST = async (req) => {
//     const body = await req.json();

//     try {
//         await connectToDatabase();
//         const hashedPassword = await bcrypt.hash(body.password, 10);
//         await Admin.create({hashedPassword: hashedPassword});     
//         return new Response(JSON.stringify('Successful Login!'), {
//             status: 200,
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };