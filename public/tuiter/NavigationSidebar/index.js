
const NavigationSidebar = (active,barSize) => {
    if (active === "explore" && barSize === "xl") {

        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i>  Home</a>
                <a class="list-group-item  list-group-item-action active" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i>  Explore</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i>  Notifications</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i>  Messages</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i>  Bookmarks</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i>  Lists</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i>  Profile</a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>More</a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);
    }
    else if(active === "explore" && barSize === "l") {

        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i>  Home</a>
                <a class="list-group-item  list-group-item-action active" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i>  Explore</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i>  <label class="wd-notify">Notifications</label></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i>  Messages</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i>  Bookmarks</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i>  Lists</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i>  Profile</a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>More</a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);

    }
    else if (active === "explore" && barSize === "m") {

        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i></a>
                <a class="list-group-item  list-group-item-action active" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span></a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);
    }
    else if (active === "home" && barSize === "xl"){
        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action active" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i>  Home</a>
                <a class="list-group-item  list-group-item-action" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i>  Explore</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i>  Notifications</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i>  Messages</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i>  Bookmarks</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i>  Lists</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i>  Profile</a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>More</a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);
    }
    else if (active === "home" && barSize === "l") {
        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action active" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i>  Home</a>
                <a class="list-group-item  list-group-item-action" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i>  Explore</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i>  <label class="wd-notify">Notifications</label></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i>  Messages</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i>  Bookmarks</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i>  Lists</a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i>  Profile</a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span>More</a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);
    }

    else if (active === "Home" && barSize === "m") {
        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action active" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i></a>
                <a class="list-group-item  list-group-item-action" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span></a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);
    }
    else {
        return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class="list-group-item list-group-item-action active" href="../HomeScreen/home.html" id = "one">
                    <i class="fa fa-home"></i></a>
                <a class="list-group-item  list-group-item-action" href="../ExploreScreen/explore.html" id = "two" >
                    <i class="fa fa-hashtag"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bell"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-envelope"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-bookmark"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="fa fa-list"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                    <i class="far fa-user"></i></a>
                <a class="list-group-item list-group-item-action" href="/" >
                <span class="fa-stack">
                    <i class="far fa-circle fa-stack-2x fa-inverse"></i>
                            <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i></span></a>
               
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>           

    `);
    }


}




export default NavigationSidebar;
