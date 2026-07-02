const express = require('express');
const app = express();
notemodel = require("./models/notes.model")
/*
post /note to crate note 
get /notes to get notes
delete / notes to delete note
path/notes to update notes 

*/




//we use express.json () middleware to parse the incoming request body as JSON
// will study this in future section in detail but for now just know that this is required to be able to access the request body in our post method
app.use(express.json());// middleware to parse icnoming request to body 
    

//post method to add a new note
app.post('/notes', async(req, res) => {
    const data = req.body
    await notemodel.create({
        title:data.title,
        discription:data.discription
        
    })
    res.status(201).send({messgae:"note created"})
}); 

//to see all the notes we have added we will create a get method to get all the notes
app.get('/notes', (req, res) => {
    
      
    
});

app.delete('/notes/:id', (req, res) => {
    
});


app.patch('/notes/:id', (req, res) => {

});




module.exports = app;





