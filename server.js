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





app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`)
})