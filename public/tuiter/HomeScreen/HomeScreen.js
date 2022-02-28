import NavigationSidebar from "../NavigationSidebar/index.js";
// import HomeComponent from "./ExploreComponent.js";
// import index from "../WhoToFollowList/index.js";
import postSummaryList from "../PostSummaryList/index.js";
import post from "../PostList/PostList.js"

(function ($) {
    $('#wd-explore').append(`
<div class="d-none d-xxl-block wd-fg-color-white wd-back-black">
<!--This is the XXL block-->
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("home","xl")}
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
        </div>
        
        <div class="d-none d-xl-block d-xxl-none wd-fg-color-white wd-back-black">
<!--        This is the XL block-->
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("home","xl")}
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
        </div>
</div>

<div class="d-none d-lg-block d-xl-none wd-fg-color-white wd-back-black">
<!--This is the large block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("home","l")}
        </div>
        <div class = "col-10">
        ${post()}
        </div>
        </div>
</div>
 <div class="d-none d-md-block d-lg-none wd-fg-color-white wd-back-black">
<!-- This is the medium block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("home","m")}
        </div>
        <div class = "col-10">
        ${post()}
        </div>
        </div>
</div>

<div class="d-none d-sm-block d-md-none wd-fg-color-white wd-back-black">
<!--This the small block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("home","m")}
        </div>
        <div class = "col-10">
        ${post()}
        </div>
        </div>
</div>
<div class="d-block d-sm-none">
<!--This is the extra small block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("home","m")}
        </div>
        <div class = "col-10">
        ${post()}
        </div>
        </div>
</div>

    `);
})($);

