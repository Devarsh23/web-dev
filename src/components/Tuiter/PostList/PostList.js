import React from "react";
import PostListItem from "./PostItem.js";
import posts from "./posts.json"
const PostList = () => {
    return (
        <>
<div className="wd-check">
            <ul className="list-group">
            {
        posts.map(post => {
            return(<PostListItem key = {post.logo} post = {post}/>);
        })
    }
            </ul>
            </div>

            </>
                ); }
export default PostList;