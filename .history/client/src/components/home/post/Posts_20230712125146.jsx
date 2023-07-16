import React, { useEffect } from 'react'
import API  from '../../../service/api';

 const Posts = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            const response  = await API.getAllPosts();

            if(response.isSuccess){
                setPosts(response.data );
            }
        }
        fetchData();
    },[]);

  return (
    // <div>Posts</div>
    <>
        {
            posts && posts.length>0 ? posts.map(post => {
                <div>Hello</div>
            })
        }
    </>
  )
}

export default Posts;
