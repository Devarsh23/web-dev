import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (
    {
        active, size
    }) => {
    console.log(active)
    if (size === "xl") {
        return (
            <>
                <div className="list-group">
                    <Link to="/" className="list-group-item" href="/">
                        <i className="fab fa-twitter"></i></Link>
                    <Link to="/tuiter"
                          className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                        <i className="fa fa-home"></i> Home</Link>
                    <Link to="/tuiter/explore"
                          className={`list-group-item  list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fa fa-hashtag"></i> Explore</Link>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bell"></i> Notifications</a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-envelope"></i> Messages</a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bookmark"></i> Bookmarks</a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="fa fa-list"></i> Lists</a>
                    <Link to="/tuiter/profile"
                          className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                        <i className="fa fa-user"></i> Profile</Link>
                    {/*<a className="list-group-item list-group-item-action" href="/">*/}
                    {/*    <i className="far fa-user"></i> Profile</a>*/}
                    <a className="list-group-item list-group-item-action" href="/">
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
    else if (size === "l") {
        return (
            <>
                <div className="list-group">
                    <Link to="/" className="list-group-item" href="/">
                        <i className="fab fa-twitter"></i></Link>
                    <Link to="/tuiter"
                          className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                        <i className="fa fa-home"></i></Link>
                    <Link to="/tuiter/explore"
                          className={`list-group-item  list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fa fa-hashtag"></i></Link>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bell"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-envelope"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bookmark"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="fa fa-list"></i></a>
                    <Link to="/tuiter/profile"
                          className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                        <i className="fa fa-user"></i></Link>
                    {/*<a className="list-group-item list-group-item-action" href="/">*/}
                    {/*    <i className="far fa-user"></i></a>*/}
                    <a className="list-group-item list-group-item-action" href="/">
                <span className="fa-stack">
                    <i className="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span></a>

                </div>
                <div className="d-grid mt-2">
                    <a href="tweet.html"
                       className="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
            </>
        );

    }
    else if(size === "m") {
        return (
            <>
                <div className="list-group">
                    <Link to="/" className="list-group-item" href="/">
                        <i className="fab fa-twitter"></i></Link>
                    <Link to="/tuiter"
                          className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                        <i className="fa fa-home"></i></Link>
                    <Link to="/tuiter/explore"
                          className={`list-group-item  list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fa fa-hashtag"></i></Link>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bell"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-envelope"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bookmark"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="fa fa-list"></i></a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-user"></i> </a>
                    <a className="list-group-item list-group-item-action" href="/">
                <span className="fa-stack">
                    <i className="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span></a>

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
                    <Link to="/" className="list-group-item" href="/">
                        <i className="fab fa-twitter"></i></Link>
                    <Link to="/tuiter"
                          className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                        <i className="fa fa-home"></i> Home</Link>
                    <Link to="/tuiter/explore"
                          className={`list-group-item  list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                        <i className="fa fa-hashtag"></i> Explore</Link>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bell"></i> Notifications</a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-envelope"></i> Messages</a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="far fa-bookmark"></i> Bookmarks</a>
                    <a className="list-group-item list-group-item-action" href="/">
                        <i className="fa fa-list"></i> Lists</a>
                    <Link to="/tuiter/profile"
                          className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                        <i className="fa fa-user"></i> Profile</Link>
                    {/*<a className="list-group-item list-group-item-action" href="/">*/}
                    {/*    <i className="far fa-user"></i> Profile</a>*/}
                    <a className="list-group-item list-group-item-action" href="/">
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
