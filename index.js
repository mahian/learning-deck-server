const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
app.use(cors());

const courses = require('./data/course.json');

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const specificId = courses.find(course => course.id === parseInt(id));
    res.send(specificId);
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})

module.exports = app;