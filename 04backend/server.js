
const connectdb = require('./src/db/db.js')
const app = require('./src/app');//we are importing the app instance from the app.js file so that we can use it to create a server and listen for incoming requests.
//connect server to database 
connectdb()
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});