import mongoose from 'mongoose';



const Connect = async (userName, password) => {

     const URL = `mongodb://${userName}:${password}@ac-ulzcvqc-shard-00-00.nuviuol.mongodb.net:27017,ac-ulzcvqc-shard-00-01.nuviuol.mongodb.net:27017,ac-ulzcvqc-shard-00-02.nuviuol.mongodb.net:27017/PROJECT0?ssl=true&replicaSet=atlas-1y8ck6-shard-0&authSource=admin&retryWrites=true&w=majority`;

     try{
          await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
          console.log("database connected successfully");
     }catch(error) {
          console.log("Error while fetching data", error);
     }
}

export default Connect;