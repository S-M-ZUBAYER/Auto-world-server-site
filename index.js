const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p2sr91x.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {

        const productsCollections = client.db('auto_world').collection('products');
        console.log('database connected ');

        app.post('/products', async (req, res) => {
            const user = req.body;
            const result = await productsCollections.insertOne(user);
            res.send(result);
        });
        app.get('/products', async (req, res) => {
            const query = {};
            const users = await productsCollections.find(query).toArray();
            res.send(users)
        })
    }

    finally {

    }


}

run().catch(console.log)


app.get('/', async (req, res) => {
    res.send('Cricket lover server is running');
});

app.listen(port, () => console.log(`Cricket lover is running on ${port}`))