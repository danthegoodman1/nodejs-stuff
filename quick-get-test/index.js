const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("request!!!!!");
    res.send("Hello");
});

app.listen(80, "0.0.0.0", () => {
    console.log("listening!");
});
