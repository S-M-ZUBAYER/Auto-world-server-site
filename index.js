// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ObjectId } = require('mongodb');
// require('dotenv').config();
// const port = process.env.PORT || 5000;

// //USER_DB=auto_worldDB
// //PASSWORD=Badw9qq27RacInXt
// const app = express();

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.p2sr91x.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function run() {
//     try {

//         const usersCollections = client.db('Cricket_Lover').collection('users');

//         console.log('database connected ')
//     }

//     finally {

//     }


// }

// run().catch(console.log)


// app.get('/', async (req, res) => {
//     res.send('Cricket lover server is running');
// });

// app.listen(port, () => console.log(`Cricket lover is running on ${port}`))