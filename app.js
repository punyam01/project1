
const express = require('express')
const app = express ();

const PORT = 8000;

app.get('/', (req, res) => {
    console.log('Request receivfljalj at root');
    res.send('Hello World23!')
  })
  
const start = async  () => {
  try {
        await app.listen(PORT, () => {
      console.log(`${PORT} is listening`);
    })
  } catch (error) {
    console.log(`port connection error ${error}`);
  }
}
start();


