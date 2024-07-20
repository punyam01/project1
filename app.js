
const express = require('express')
const app = express ();
require('dotenv').config()

// const PORT = 8000;

// adding routes fxn 
const userroutes = require("./routes/user.routes");

app.use("/api/v1/users" , userroutes);


const start = async  () => {
  try {
        await app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} is listening`);
    })
  } catch (error) {
    console.log(`port connection error ${error}`);
  }
}
start();


