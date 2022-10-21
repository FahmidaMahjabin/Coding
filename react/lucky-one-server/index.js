const express = require('express');
const cors = require('cors');
const { use } = require('express/lib/router');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 5000;
// use middleware
const app = express();
app.use(cors());
app.use(express.json())
// connect to mongodb

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.dfsqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("luckyOne").collection("meals");
//   console.log("mongodb connected")
//   // perform actions on the collection object
//   client.close();
// });
async function run (){
    try{
        await client.connect();
        const mealsCollection = client.db("luckyOne").collection("meals");
        // console.log(mealsCollection)
        app.get("/meals", async(req, res) =>{
            const query = {};
            const cursor = mealsCollection.find(query);
            const result = await cursor.toArray();

            res.send(result)
        })

        app.post("/meals", async(req, res) =>{
            const newMeal = await  req.body;
            mealsCollection.insertOne(newMeal)
            console.log(newMeal);
            
        })

        app.delete("/meals/:id", async(req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const afterDelete = await mealsCollection.deleteOne(query);
            res.send(afterDelete);
            
        })

        app.get("/meals/:id", async (req, res) =>{
            const parameter = req.params;
            console.log("params:", parameter)
            const id = req.params.id;
            console.log("id:", id)
            const query = {_id: ObjectId(id)};
            const oneMeal = await mealsCollection.findOne(query);
            res.send(oneMeal)
        })


    }
    finally{

    }
}
run().catch(console.dir)

app.get("/", (req, res) =>{
    res.send("get the response")
})

// app.get("/meals", (req, res) =>{
//     res.send("all meals")
// })
app.listen(port, () =>{
    console.log(`listening to posrt: ${port}`)
})