// now we will be creating a simple notes app and test it with postman you can also use 
//thunder client or insomnia rest client to test the api endpoints
//go to app.js inside src 
const app = require('./src/app');//we are importing the app instance from the app.js file so that we can use it to create a server and listen for incoming requests.


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});