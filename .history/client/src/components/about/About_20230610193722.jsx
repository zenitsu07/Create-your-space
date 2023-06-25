
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>

                <Typography variant="h3">Create_your_space</Typography>

                <Text  variant='h6'>

About Us
Welcome to Create Your Space, a one-of-a-kind blog app designed to empower individuals to express themselves and share their unique perspectives with the world. Our mission is to provide a platform where users can create their own digital sanctuaries, curate content that resonates with them, and connect with like-minded individuals.
At Create Your Space, we believe that everyone has a story to tell, and our goal is to help you bring that story to life. Our user-focused approach ensures that you have the tools and resources needed to craft a personalized blogging experience that truly reflects your passions, interests, and aspirations.

                </Text>

                <Text variant="h5">

                    This app revolves around our users, who are willing to let themselves be open to the idea of creating their own virtual presence
                    
                    We allow our users to explore their  own creativity or deep dive into some amazing works out there.

                    
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? 

                    Approach me positively on 
                        <Link href="https://www.instagram.com/zenitsu___07/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                   
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;