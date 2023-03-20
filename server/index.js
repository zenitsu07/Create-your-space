import pkg from 'express';
const { express } = pkg;
import dotenv from 'dotenv'

//latest syntex to import 
import { Connection } from './database/db.js';
import router from './routes/route.js';

dotenv.config();

const app = express();  
//app.use is used to handle any type of requests or method 
//app.use(path,handler function)

app.use('/', router)

const PORT = 4000;

app.listen(PORT,() =>{

    console.log(`server is running on port: ${PORT}`)

});
const USERNAME = process.env.DB_USERNAME

const PASSWORD = process.env.DB_PASSWORD

//parse the importted usrname and password
Connection(USERNAME, PASSWORD);