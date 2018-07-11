const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // For HTML forms
app.use(express.json()); // For JSON objects

app.get("/", (req, res) => {
    console.log("request!!!!!");
    res.send("Hello");
});

app.post("/", (req, res) => {
    console.log("Post request:");
    console.log(req.body);
    res.send(`Got: ${JSON.stringify(req.body)}`);
})

app.post("/not", (req, res) => {
    console.log("Post request:");
    console.log(req.body);
    res.send(`Got: ${JSON.stringify(req.body)}`);
})

app.listen(8080, "0.0.0.0", () => {
    console.log("listening!");
});
