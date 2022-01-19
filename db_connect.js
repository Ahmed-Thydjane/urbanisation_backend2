const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cheick:<Ibg@france2021>@cluster0.f51yr.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Cluster0").collection("homevideo");
  // perform actions on the collection object
  console.log('conneter à la bbb')
  client.close();
})