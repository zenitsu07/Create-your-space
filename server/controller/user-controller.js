import user from "../model/user.js";
//File functions -> handle callback functions used in route.ks
export const signupUser = async (request, response) =>{

    try{
        
        const user = request.body;

        //validate the user using user functin
        const newUser = new User(user);
        //save the user
        await newUser.save();
        
        return response.status(200).json({msg:'signup successful'})
    }
    catch(error){
        return response.status(500).json({msg: "Error while signup the user"})
    }

}