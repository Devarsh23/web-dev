import NavigationSidebar from "../NavigationSidebar/index.js";
// import HomeComponent from "./ExploreComponent.js";
// import index from "../WhoToFollowList/index.js";
import postSummaryList from "../PostSummaryList/index.js";
import post from "../PostList/PostList.js"

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("home")}
        </div>
        <div class = "col-6">
        ${post()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <label class="wd-search-color1">
            ${postSummaryList()}
            </label>
        </div>
        </div>
    `);
})($);

