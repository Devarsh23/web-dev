import React from "react";
const WhoToFollowList = (
    {
    who = {
    avtarIcon: "/tuiter/images/nasa.png",
        userName: 'NASA',
        handle: 'nasa'
    }
    }
) => {
        return (
            <>
            <li className="list-group-item">
                <img src={who.avatarIcon} className="rounded-pill"></img>
                <label className="h6 ps-2 wd-fg-color-white wd-l-size">{who.userName}
                <i className="fas fa-check-circle wd-fg-color-white"></i>
                    <br></br>
                <label className="text-muted">{who.handle}</label>
                </label>
                
                <label className="pt-2 float-end">
                <button className="btn rounded-pill btn-primary float-end ">Follow</button>
            </label>
            </li>
       
    </>
);
}
export default WhoToFollowList;
