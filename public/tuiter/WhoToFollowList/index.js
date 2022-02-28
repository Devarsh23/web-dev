import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            <li class="list-group-item"><label class="h6" style="color: white">
                        Who to Follow</li>
<!--             <li class="list-group-item">-->
${
            who.map(whos => {
            return(WhoToFollowListItem(whos));
        }).join('')
    }
<!--             </li>-->
            </ul>
`); }
export default WhoToFollowList;