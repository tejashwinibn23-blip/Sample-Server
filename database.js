const URI="mongodb+srv://tejashwinibn23_db_user:B9evlNiv7fo5UwBl@cluster0.fflaqwu.mongodb.net/";

const { MongoClient } = require('mongodb');

async function runGetStarted() {
  const uri = URI;
  const client = new MongoClient(uri);
  try {
    const database = client.db('helloWorld');
    console.log("connected successfully")
    const user = database.collection('UserCollection');
    /* Add data */ 
    //  const newData={
    //     fname:"teju",
    //     lname:"Bn"
    // }
    // await user.insertMany([newData]);
    //------------//
    /* Update data */
    // const query={fname:"teju"};
    // const update ={$set :{ fname:"tejashwini",lname:"BN"}};
    // const res= await user.updateOne(query,update);
    // console.log(res)
    //______________//
    /* Delete data */
    // const query = { fname: "tejashwini" };
    // const result = await user.deleteOne(query);
    // console.log(result)
    //-------------// 
    /* Retrive data */ 
    const data=await user.find({}).toArray();
    console.log(data)
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);
