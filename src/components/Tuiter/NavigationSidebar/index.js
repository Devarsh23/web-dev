import React from "react";
const NavigationSidebar = (
    {
        active
    }) => {
    if (active === "explore") {

        return (
            <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>
                <a className="list-group-item list-group-item-action" href="../HomeScreen/home.html" id = "one">
                    <i className="fa fa-home"></i>  Home</a>
                <a className="list-group-item  list-group-item-action active" href="../ExploreScreen/explore.html" id = "two" >
                    <i className="fa fa-hashtag"></i>  Explore</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-bell"></i>  Notifications</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-envelope"></i>  Messages</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-bookmark"></i>  Bookmarks</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="fa fa-list"></i>  Lists</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-user"></i>  Profile</a>
                <a className="list-group-item list-group-item-action" href="/" >
                <span className="fa-stack">
                    <i className="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>More</a>
               
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
                </>
    );
    }
    else {
        return (
            <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>

                <a className="list-group-item list-group-item-action active" href="../HomeScreen/home.html" id = "one">
                    <i className="fa fa-home"></i>  Home</a>
                <a className="list-group-item  list-group-item-action" href="../ExploreScreen/explore.html" id = "two" >
                    <i className="fa fa-hashtag"></i>  Explore</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-bell"></i>  Notifications</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-envelope"></i>  Messages</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-bookmark"></i>  Bookmarks</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="fa fa-list"></i>  Lists</a>
                <a className="list-group-item list-group-item-action" href="/" >
                    <i className="far fa-user"></i>  Profile</a>
                <a className="list-group-item list-group-item-action" href="/" >
                <span className="fa-stack">
                    <i className="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>More</a>
               
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    </>
    );
    }


}




export default NavigationSidebar;
