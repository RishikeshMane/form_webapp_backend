const exprees = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const testAPI = require("./models")
const cors = require('cors')
const app = exprees();
const port = process.env.PORT;

app.use(cors())

//const  url = "mongodb://127.0.0.1:27017/testAPI";
const url = "mongodb+srv://rexspec:opjeet1234@cluster0.xue9f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,})
const con = mongoose.connection
con.on("open",()=>{
    console.log("API db connected");
})

app.use(morgan("dev"));
app.use(exprees.urlencoded({ extended: true }));
app.use(exprees.json());

app.get("/", (req, res) => {
    res.send("Responding to base request");
  });

app.get("/find", (req, res) => {
    testAPI
      .find()
      .select("Name Question")
      .then((document) => {
        const response = {
          Requestmade: "GET",
          Documentdata: document,
        };
        res.send(response);
        console.log("successfull Get request to gamesroute");
      })
      .catch((err) => {
        res.send("Error found in GET request");
      });
  });

app.post("/", (req, res, next) => {
  const model = new testAPI({
    Name: req.body.title,
    RollNo:req.body.rollno,
    Question: req.body.question,
  });
  model
    .save()
    .then(console.log("Data saved successfully by post request"))
    .catch((error) => {
      res.send("Error found in POST request");
    });
  res.send("posted successfully");
  next();
});

app.delete("del/:title", (req, res) => {
  reqid = req.params.title;
  gamedb.remove({ _id: reqid }).then((result) => {
    console.log("Delete request successfull");
    res.send("Delete request successfull");
  });
});
  
module.exports = app;