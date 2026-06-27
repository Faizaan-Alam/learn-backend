const express = require('express');
const app = express();

//array to store notes
const notes = [

]

//we use express.json () middleware to parse the incoming request body as JSON
// will study this in future section in detail but for now just know that this is required to be able to access the request body in our post method
app.use(express.json());




//post method to add a new note
app.post('/notes', (req, res) => {
    const note = req.body;//get the note from the request body
    notes.push(note);//add the note to the notes array
    res.status(201).send('Note added successfully');//send a response with status code 201 and a message
    console.log(req.body);
}); 

//to see all the notes we have added we will create a get method to get all the notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes
    })   
    
});

app.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;//get the note id from the request parameters
    delete notes[noteId];//delete the note from the notes array
    res.status(200).send('Note deleted successfully');//send a response with status code 200 and a message
});


app.patch('/notes/:id', (req, res) => {
    const noteId = req.params.id;//get the note id from the request parameters
    const discription = req.body.discription// to get body of discription
    const title = req.body.title
    notes[noteId].title = title
    notes[noteId].discription = discription 
    res.status(200).json({
        message: "notes updated succesfully"
    })
});




module.exports = app;





//noe you kno what problem comes here the moment we will close a=our server will loose all of our data 
//how to avoid these we will learn about this in next section
