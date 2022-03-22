import PostListItem from "./PostItem.js";
import posts from "./posts.json"
const PostList = () => {
    return (`
<div class="wd-check">
            <ul class="list-group">
            <!-- continue here -->
            ${
        posts.map(post => {
            return(PostListItem(post));
        }).join('')
    }
            </ul>
            </div>
`); }
export default PostList;