const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
app.use(cors());

const course = require('./data/course.json');

app.get('/course', (req, res) => {
    res.send(course);
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

module.exports = app;