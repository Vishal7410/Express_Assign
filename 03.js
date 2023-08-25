const express = require("express");

const app = express();

const PORT = 3055;
const hostname = 'localhost'

app.get('/',(req,res) => {
    res.json({msg:'msg:I am HomePage'})
});
app.get('/about',(req,res) => {
    res.json({msg:'I am About Page'})
});
app.get('/contact',(req,res) => {
    res.json({email: 'support@pwskills.com'});

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${hostname}:${PORT}`);
})
