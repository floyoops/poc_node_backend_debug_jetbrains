import express from "express";

const app = express();
let a = process.env.TEST_A;
console.log("test_a", a);

app.get("/", function (req, res) {
    let a = "a";
    let b = "b";
    res.send(`hello world ${a} ${b}`);
});

app.listen(3000, function () {
    console.log("app listening");
});