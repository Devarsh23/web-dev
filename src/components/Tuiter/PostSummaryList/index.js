import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.json"
const PostSummaryList = () => {
    return (
        <>
<div className="wd-check">
            <ul className="list-group">
            {
        posts.map(post => {
            return(<PostSummaryListItem key = {post.title} post = {post}/>);
        })
    }
            </ul>
            </div>

            </>
                ); }
export default PostSummaryList;