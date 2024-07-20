const {  mongoose } = require("mongoose")
URI = "mongodb+srv://punyamkumarsingh:punyam123@userdata.mpjwhbe.mongodb.net";
const dbConnect = async () => {
    try {
       
        await mongoose.connect(`${URI}/${process.env.DBNAME}`) 
            console.log("database  connected");
         
    } catch (error) {
        console.log(`database connection error ${error}`);
    }
}

module.exports = dbConnect