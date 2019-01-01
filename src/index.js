const express = require('express');
const app = express();
var a = process.env.TEST_A;
console.log('test_a', process.env.TEST_A);

app.get('/', function (req, res) {
    var a = 'a';
    var b = 'b';
    res.send('hello world');
});

app.listen(3000, function () {
   console.log('app listening');
});