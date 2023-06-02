import React from 'react'
import {useState} from 'react';

import {Box,TextField,Button,styled,Typography} from "@mui/material"

import API from '../service/api';

const Component = styled(Box)`
    
    width: 400px;
    margin: 8rem auto 8em auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.7);

    
`

const Image = styled('img')`

    width: 100; 
    margin: auto ;
    display:flex;
    padding: 50px 0 0;
    

`
const Wrapper = styled(Box)`

    padding: 25px 35px;
    display: flex;
    flex:1;
    flex-direction: column;
    & > div,& > button,&> p{
        margin-top: 20px
    }

`
const LogInButton = styled(Button)`
    
    text-transform: none;
    background: #fB641B;
    color:#fff;
    height: 48px;
    border-radius: 2px;

`
const SignUpButton = styled(Button)`
    
    text-transform: none;
    background: #fff;
    color:#2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%)

`
const TextStyle = styled(Typography)`
    font-size:16px;
    color: #878787
`

const signUpInitialValues = {
    name :"",
    username:"",
    password:"", 
}

const logInInitialValues ={
    username:"",
    password:""

}

const Error = styled(Typography)`

    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight : 600
`

const Login = () => {

    const [account, toggleAccount] = useState("login")
    const [signup, setSignup] = useState(signUpInitialValues)
    const [error,setError] = useState('');
    const [login,setLogin] =  useState(logInInitialValues);

    const toggleSignup = () => { 
        account === "signup"? toggleAccount("login"): toggleAccount("signup")
    }   

    const onInputChange = (e) =>{ 
        
        console.log(e.target.name);//.name provides which componenet is triggering this fucntion
        //new state must include previous signup append news target values using target.name to idenfity key in signup object
        setSignup( {...signup, [e.target.name]:[e.target.value] } )
        console.log(signup);
        
    }

    const onValueChange = (e) =>{
        setLogin({...login, [e.target.name]: [e.target.value]} )
    }

    const signupUser = async () =>{

        let response  = await API.userSignup(signup)    
        console.log(response.isSuccess)

        if(response.isSuccess === true){
            //if console comes here => on clicking sigup page will toggle to login
            setError('');
            setSignup(signUpInitialValues);
            toggleAccount('login')

        }else{
            console.log('in here')
            setError('Something went wrong, Please try again later')
            console.log(error)
        }

    }

    const loginUser = async () => {

        //Next steps -> creating an api call for login as userLogin in SERVICE_URLS of config.js file
        
        let response  = await API.userLogin(login);
        if(response.isSuccess) {
            
            setError("");
            setLogin(logInInitialValues)
            

        }else{  
            console.log('Login failed')
            setError('Something went wrong, Please try again later')
        }

    }

    return(

        <Component>
           <Box>

                <Image src='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'></Image>
                
                {account === "login"?

                    <Wrapper>

                        <TextField id="standard-basic"  label="enter username" value = {login.username} onChange={(e) => onValueChange(e)} name ="username" variant="standard" />
                        <TextField id="standard-basic" label="enter Password"  value={login.password} onChange={(e) => onValueChange(e)} name ="password" variant="standard" />

                        <LogInButton variant="contained" onClick={() =>loginUser() } >Login</LogInButton>
                        <TextStyle style={{textAlign:'center'}}>Or</TextStyle>
                        {error && <Error>{error}</Error>}
                        <SignUpButton variant="outlined" onClick= {() =>toggleSignup()}> Create an account</SignUpButton>
            
                    </Wrapper>
                :
                    <Wrapper>

                        <TextField id="standard-basic" label="Enter Full Name" name="name" onChange= {(e)=>  onInputChange(e)} variant="standard" />
                        <TextField id="standard-basic" label="Enter username" name = "username" onChange= {(e)=>  onInputChange(e)} variant="standard" />
                        <TextField id="standard-basic" label="Enter Password" name ="password" onChange= {(e)=>  onInputChange(e)} variant="standard" />
                        
                        {error && <Error>{error}</Error>}

                        <SignUpButton variant="outlined"  onClick={() => signupUser()}>SignUp</SignUpButton>
                        <TextStyle style={{textAlign:'center'}}>Or</TextStyle>
                        <LogInButton variant="contained" onClick={() => toggleSignup() }  > Already have an account?</LogInButton>
            
                    </Wrapper>
                }
           </Box>
        </Component>
    )
}

export default Login;