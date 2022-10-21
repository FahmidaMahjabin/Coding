const express = require('express');
const app = express();

// console.log("app:", app)
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000
const users = [
  {id:1 , name: "eva", email:"eva@gmail.com"},
  {id:2, name: "emaon", email: "emon@gmail.com"},
  {id:3, name: "ayon", email: "ayon@gmail.com"},
  {id:4, name: "abul", email: "ayon@gmail.com"},
  {id:5, name: "kabul", email: "ayon@gmail.com"},
  {id:6, name: "jabil", email: "ayon@gmail.com"},
]
app.get('/', (req, res) => {
  res.send('Hello nodemon')
})
app.post('/users', (req, res) =>{
  const user = req.body;
  user.id = users.length + 1;
  console.log("user:", user);
  users.push(user)
  
  
})
 
  
app.post("/", (req, res) =>{
  console.log(req.body)
  res.send("It's a post request")
})
app.get("/users", (req, res) =>{
  const query = req.query.name;
  if(query){
    const matched = users.filter(user => user.name.includes(query))
    res.send(matched)
  }
  else{
    res.send(users)
  }
})
app.get("/about", (req, res) =>{
  res.send("I am gooood")
})
app.get("/user/:id", (req, res) =>{
  const id = req.params.id;
  res.send(`user is is ${id}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})