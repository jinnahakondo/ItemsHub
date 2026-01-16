import { ObjectId } from "mongodb";

const { connect } = require("@/app/lib/dbConnect");

const productCollection = await connect('products')

export async function GET(request, { params }) {

    const { id } = await params;

    if (id.length !== 24) {
        return Response.json({ message: 'id not valid' })
    }

    const query = { _id: new ObjectId(id) }

    try {
        const result = await productCollection.findOne(query);
        return Response.json(result)
    } catch (error) {
        return Response.json({ error: error.message, status: 500 })
    }
    // return Response.json({ message: 'hello', id: id, query })
}