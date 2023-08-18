// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// import Token from '../model/token.js'

// dotenv.config();

// export const authenticateToken = (request, response, next)=>{

//     const authHeader=  request.headers['authorization']
//     //split from bearer with space as marker
//     const token  = authHeader && authHeader.split(' ')[1];

//     if(token == null){

//         return response.status(401).json({msg: 'token is missing'});

//     }

//     //verifies token with ACCESSSESCRETKEY AND THEN CALLS CALLBACK FUNCTION
//     jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user)=>{
//         if(error){
//             return response.status(403).json({msg: 'invalid token'})
//         }

//         request.user = user;
//         //next function is called to tranfer the code of executor from middleware to api i.e.e createPost in this case
//         next();
//     })

// }

// export const createNewToken = async(req, res) =>{
    
//     const refreshToken = req.body.token.split(' ')[1];

//     if(!refreshToken){
//         return res.status(401).json({msg:'Refresh token is missing'})
     
//     }
//     const token = await Token.findOne({token:refreshToken})

//     //deal with missing token
//     if(!token){
//         return res.status(404).json({msg:'refresh token is missing'})
//     }

//     //if exists
//     //verify the tokne found with refersh secret key to match that user is valid
//     jwt.verify(token.token, process.env.REFRESH_SECRET_KEY, (error,user) => {
        
//         if(error){
//             res.status(500).json({msg: 'invalid refersh token'});

//         }
//         const accesstoken = jwt.sign(user, process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
//         return res.status(200).json({accesstoken:accesstoken});

//     })

// }
const loginUser  = async () => {

    //Next steps -> creating an api call for login as userLogin in SERVICE_URLS of config.js file
    console.log(login)
    let response  = await API.userLogin(login);

    if(response.isSuccess) {
        
        showError("");
        setLogin(logInInitialValues)

        //accesstoken and response.data comes while login 
        sessionStorage.setItem('accesstoken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`)

        //we get sessionStorage and we can use the session storage response data for user data fafter loginto user further for personalisation
        setAccount({ name: response.data.name, username: response.data.username })               
        
        isUserAuthenticated(true);//if logined then true
        setLogin(logInInitialValues)
        //navigate to home once login success
        navigate('/');

    }else{  

        console.log('Login failed')
        showError('Something went wrong, Please try again later')
    
    }

}


