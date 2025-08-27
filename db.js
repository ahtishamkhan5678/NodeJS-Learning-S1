const { MongoClient } = require("mongodb");

// connecting the uri
const url = "mongodb+srv://debugdiaries288:QipOpGROVDnY3iXo@myfirstcluster.se6hfyn.mongodb.net/";
const client = new MongoClient(url);

// 
const dbName = "UserTest";



async function main() {
    // use connect method to connect to the server 
    await client.connect();
    console.log("My DB connected Successfully");
    const db = client.db(dbName);
    const colllection = db.collection("usertest");
    // const insertResult = await colllection.insertMany(
    //     [
    //         {

    //             "name": "John Doe",
    //             "email": "john.doe@example.com",
    //             "age": 30,
    //             "isActive": true,

    //         },
    //         {

    //             "name": "Amit Kumar",
    //             "email": "jkumar12doe@example.com",
    //             "age": 30,
    //             "isActive": true,

    //         },

    //     ]);
    // console.log("Insert Document =>", insertResult);


    // to find the fetch all data from db
    // const findAll = await colllection.find({}).toArray(); // convert in to array
    // console.log("get all data from db =>", findAll);
    const query = { name: "amam kumar" }

    // const getSingleData = await colllection.findOne(query);
    // console.log("single data", getSingleData)

    // const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
   

    // update single data
    // const updateOne = await colllection.updateOne({ name: "John Doe" }, {$set: {name:'amam kumar'}});
    //  console.log('Updated documents =>', updateOne);


    const deleteOneDta = await colllection.deleteOne(query);
    console.log("Delted Succesfully", deleteOneDta);
    return "done";





}



main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
