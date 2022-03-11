import mongoose from "mongoose"

function connectionDB() {


    if(mongoose.connections[0].readyState){
        console.log("Already Connected to CosmosDB")
        return
    }
    mongoose.connect(process.env.dbURI)
    mongoose.connection.on("connected", ()=> {
        console.log("Connected with CosmosDB");
    })
    mongoose.connection.on("error", (err)=> {
        console.log("Error While Connecting",err);
    })
}

export default connectionDB
