const {  mongoose } = require("mongoose")
const dbConnect = async () => {
    try {
       
        await mongoose.connect(`${process.env.URI}/${process.env.DBNAME}`) 
            console.log("database  connected");
         
    } catch (error) {
        console.log(`database connection error ${error}`);
    }
}

module.exports = dbConnect