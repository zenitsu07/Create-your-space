import pkg from 'express';
const express  = pkg;
//latest syntex to import 

const app = express();  

const PORT = 4000;
app.listen(PORT,() =>{
    console.log(`server is running on port: ${PORT}` )
})

