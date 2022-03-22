import React from "react";
const PostSummaryListItem = ({post =
    {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": ""
    }
}) => {
    return(
        <>
<div className=" ps-2 pt-2 pb-2">
<div className="row">
                    <div className="col-9">
                        <label className="text-muted">${post.topic}</label><br></br>
                        <label className="wd-size-xxl"><b>${post.userName}</b>

                        </label>
                        <i className="fas fa-check-circle wd-fg-color-white"></i>
                        <label className="text-muted">- ${post.time}</label><br></br>
                        <b>{post.title}</b>
                    </div>
                        <div className="col-3">
                        <div className="pt-2 pe-2">
                            <img src={post.image} className="wd-rounded-corners-logo img-fluid float-end"></img>
                        </div>  
                    </div>
                    </div>
                    </div>
       
    </>
);
}
export default PostSummaryListItem;
