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
    <div>Posts</div>
  )
}

export default Posts;
