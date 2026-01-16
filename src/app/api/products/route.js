import { revalidatePath } from "next/cache";
import { connect } from "../../lib/dbConnect"

const productCollection = await connect('products')


// get all products 
export async function GET(request) {
    try {
        const result = await productCollection.find().toArray();
        return Response.json({ result, status: 200 })
    } catch (error) {
        return Response.json({ error: error.message, status: 500 })
    }
}

export async function POST(request) {
    try {
        const product = await request.json()
        const result = await productCollection.insertOne(product)
        revalidatePath('/products')
        return Response.json(result)
    } catch (error) {
        return Response.json({ status: 500, error: error.message })
    }

}
