import React, { useState,useEffect } from 'react'
import API  from '../../../service/api';
import Post from './Post';
import {Grid, styled, Box, TextareaAutosize, Button, InputBase, FormControl, Typography  } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    width:'100%',
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
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )
            }):
            <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                No data is available for selected category
            </Box>
        }
    </>
  )
}

export default Posts;