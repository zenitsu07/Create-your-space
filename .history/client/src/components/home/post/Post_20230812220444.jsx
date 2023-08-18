import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
    &:hover {
        border-color: #000;
        box-shadow: 0 0 10px #000;
        transition: 1s;
      } 
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
    margin: 15px
`;

const Post = ({ post }) => {

    // const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    const url = post.picture ? post.picture :"https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    // let category = post.categories || "All"; // Check if post.categories is present, otherwise assign an empty string
    let category = post.category
    // category = category.toLowerCase().includes('null') ? 'All' : category; // Check if category contains the keyword 'null', if so, set it to 'All'
 
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    const handleClick = ((e)=>{

    })

    return (

        <Container onClick={(e) => {handleClick(e)}}> 
            <Image src={url} alt="post" />
            <Text>{category}</Text>
           
            <Heading>{addEllipsis(post.title, 20)}</Heading>
            <Text>
                 
                {
                    post.username?
                    post.username:
                    'Anonymous'
                }
                </Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>

    )
}

export default Post;