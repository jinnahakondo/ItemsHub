import { connect } from "@/app/lib/dbConnect"

const productCollection = await connect('products')

export async function GET(request) {
    try {
        const result = await productCollection.find().project({ category: 1 }).toArray();
        return Response.json({ result, status: 200 })
    } catch (error) {
        return Response.json({ error: error.message, status: 500 })
    }
}