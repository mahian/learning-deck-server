const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
app.use(cors());

const courses = require('./data/course.json');
const categories = require('./data/categories.json');

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/category', (req, res) => {
    res.send(categories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const specificCategory = courses.filter(course => course.categoryId === parseInt(id))
    if(id == 0){
        res.send(courses)
    }else{
        res.send(specificCategory);
    }
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