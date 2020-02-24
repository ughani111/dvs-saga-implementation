const express = require('express')
const fetch = require('node-fetch');
var cors = require('cors');
const app = express()
const port = 3002
app.use(cors())
app.get('/', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => res.send(json)) 
  
})


app.listen(port, () => console.log(`server is listening on port ${port}!`))