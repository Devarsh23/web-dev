import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
    return (`
<div class="wd-check">
            <ul class="list-group">
            <!-- continue here -->
            ${
        posts.map(post => {
            return(PostSummaryListItem(post));
        }).join('')
    }
            </ul>
            </div>
`); }
export default PostSummaryList;