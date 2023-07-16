import React, { useState,useEffect } from 'react'
import API  from '../../../service/api';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl, Typography  } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));
const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});
const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

 const Posts = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const response  = await API.getAllPosts();

            if(response.isSuccess){
                setPosts(response.data );
            }else{
                console.log("error fetching")
            }
        }
        fetchData();
    },[]);

  return (
    // <div>Posts</div>
    <>
        {
            posts && posts.length>0 ? posts.map(( post,key) => {
                
                return(
                    <div>
                        <Container>

                            <Image src={post.picture} alt="post" />

                            <Typography variant="h3" >
                                {post.title}
                            </Typography>
                            <Typography variant="h4" >
                                {post.title}
                            </Typography>

                           
                        </Container>

                    </div>
                    
                )
            }):<div> No available data</div>
        }
    </>
  )
}

export default Posts;
