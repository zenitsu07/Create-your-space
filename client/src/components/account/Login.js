import React from 'react'
import {useState} from 'react';

import {Box,TextField,Button,styled,Typography} from "@mui/material"

const Component = styled(Box)`
    
    width: 400px;
    margin: 8rem auto 8em auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.7);

    
`
// display:flex;
    // flex-direction: row;(useState ) from 'react';
    // flex-wrap: wrap;
    
    // justify-content: center;
    // align-items: center;
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
const SignInButton = styled(Button)`
    
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

const Login = () => {

    const [account, toggleAccount] = useState("login")
    const [signup, setSignup] = useState(signUpInitialValues)


    const handleSignIn = () => { 
        account === "login"? toggleAccount("SignIn"): toggleAccount("login")
    }

    const onInputChange = (e) =>{ 

        console.log(e.target.name);//.name provides which componenet is triggering this fucntion
        //new state must include previous signup append news target values using target.name to idenfity key in signup object
        setSignup( {...signup, [e.target.name]:e.target.value} )
        console.log(signup);
        
    }

    return(

        <Component 
        >
           <Box>

                <Image src='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'></Image>
                
                {account === "login"?
                    <Wrapper>
                        <TextField id="standard-basic" label="username" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                        <LogInButton variant="contained" >Login</LogInButton>
                        <TextStyle style={{textAlign:'center'}}>Or</TextStyle>
                        <SignInButton variant="outlined" onClick= {handleSignIn}> Create an account</SignInButton>
            
                    </Wrapper>
                :
                    <Wrapper>

                        <TextField id="standard-basic" label="Enter Full Name" name="name" onChange={onInputChange} variant="standard" />
                        <TextField id="standard-basic" label="Enter username" name = "username" onChange={onInputChange} variant="standard" />
                        <TextField id="standard-basic" label="Enter Password" name ="password" onChange={onInputChange} variant="standard" />
                        <SignInButton variant="outlined" >SignUp</SignInButton>
                        <TextStyle style={{textAlign:'center'}}>Or</TextStyle>
                        <LogInButton variant="contained" onClick={handleSignIn}  > Already have an account?</LogInButton>
            
                    </Wrapper>
                }
           </Box>
        </Component>
    )
}

export default Login;