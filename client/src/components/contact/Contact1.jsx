
import { Box, styled, Typography,TextField,Button,  Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import Banner from '../banner/banner';
import Header from '../header/Header';

const Ban = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`

    color: #878787;

`;


const Contact = () => {

    return (

        <Box>
            <Header />
            <Ban />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                
                <Text variant="h5">
                <Box component="span" style={{ marginLeft: 5 }}>
                    Check my works on Github here
                        <Link href="https://github.com/zenitsu07" color="inherit" target="_blank"> <GitHub /></Link>
                    </Box>
                    <hr></hr>
                    Reach out to me on
                    <Link style={{paddingTop:"2em"}} href="https://www.instagram.com/zenitsu___07/" color="inherit" target="_blank">
                        <Instagram/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:utkarsh.dev83@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>

       
      
       
        </Box>
    );

}

export default Contact;