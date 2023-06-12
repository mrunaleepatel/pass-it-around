require("dotenv").config()
const express = require("express") 
const app = express() 
const PORT = process.env.PORT

app.get('/', (req, res) => {
    const bottles = 99;
    res.send(`
      <h1>${bottles} Bottles of mango juice on the wall</h1>
      <a href="/${bottles - 1}">take one down and pass it around</a>
    `);
  });

app.get('/:number_of_bottles', (req, res) => {
    const bottles = Number(req.params.number_of_bottles);
    const nextBottles = bottles - 1;

    
})



app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})