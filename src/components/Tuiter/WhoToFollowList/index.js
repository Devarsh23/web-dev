import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
// import who from "./who.json"
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
    return (
        <>
            <ul className="list-group">
            <li className="list-group-item"><label className="h6" style={{color: "white"}}>
                Who to Follow</label></li>
{
                who.map(item => {
                    return (
                        <WhoToFollowListItem key={item.handle} who={item}/>
                    );
                })
            }
            </ul>
</>
); }
export default WhoToFollowList;