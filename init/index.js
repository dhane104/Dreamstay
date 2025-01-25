const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/dreamstay";
main()
.then(() =>{
    console.log("connected to database");

}).catch((err)=>{
   console.log(err);
});
async function main() {
    
 await mongoose.connect(MONGO_URL);   
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"674d53fe2a3987eaa404d2c0"}));
    await Listing.insertMany(initData.data);
    console.log("data was initalizes");

};
initDB();