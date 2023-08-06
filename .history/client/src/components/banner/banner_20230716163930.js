
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1907&q=480) center/100%  #000;
    background-repeat:none;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    // background: #FFFFFF;
    font-weight: bold;
    position: relative;
    background: inherit;    
    color: rgba(0, 0, 0, 0.7);
    margin: 4em;
`;

const Banner = () => {
    
    return (
        <Image>
            {/* <Heading>Blog</Heading> */}
            <SubHeading></SubHeading>
        </Image>
    )
}

export default Banner;