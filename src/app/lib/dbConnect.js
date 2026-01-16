const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;

let client;
let clientPromise;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }

}

if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
}

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}


export const connect = async (collection) => {
    const client = await clientPromise;
    return client.db("productHubDB").collection(collection)
}