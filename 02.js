const express = require('express');

const app = express();
const PORT = 3000;

let counter = 0;

app.get('/',(req,res) => {
    res.json({counter});

});

app.get('/increment',(req, res) => {
    counter++;
    res.json({counter})
});
app.get('/decrement',(req, res) => {
    counter--;
    res.json({counter});
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});