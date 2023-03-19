
import mongoose from "mongoose"

export const Connection = () =>{
    const URL = '';
    try{
        //function is passed as 2nd argunment to parse the passed URL to connect fucntion
        mongoose.connect(URL, useNewUrlParser)
    }
    catch(error) {

     }
}