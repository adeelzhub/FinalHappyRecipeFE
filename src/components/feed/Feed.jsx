import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({user, refresh, setRefresh}) {

    const [posts, setPosts] = useState([]);
    

    useEffect(()=>{

        const fetchPosts = async () =>{
            const res = user 
            ? await axios.get("posts/timeline/" + user._id)
            : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data)
        }
        fetchPosts();
    },[user, refresh]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share 
                 refresh={refresh}
                 setRefresh={setRefresh}
                user={user}/>
                <div className="feedPost">
                {posts.map ((p)=>(
                <Post key={p._id} post ={p}/>    
                ))}
                
                </div>
               

            </div>
        </div>
    )
}
