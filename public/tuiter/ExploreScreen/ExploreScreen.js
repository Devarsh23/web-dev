import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import index from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
<div class="d-none d-xxl-block wd-fg-color-white wd-back-black">
<!--        This is XXL block-->
        
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            ${NavigationSidebar("explore","xl")}
        </div>
        <div class = "col-6 col-md-6 col-xl-6 col-xxl-6 ">
        ${ExploreComponent("xl")}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${index("xl")}
        </div>
        </div>
</div>
<div class="d-none d-xl-block d-xxl-none wd-fg-color-white wd-back-black">
<!--        This is XL block-->
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            ${NavigationSidebar("explore","xl")}
        </div>
        <div class = "col-6 col-md-6 col-xl-6 col-xxl-6 ">
        ${ExploreComponent("xl")}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${index("xl")}
        </div>
        </div>
</div>

<div class="d-none d-lg-block d-xl-none wd-fg-color-white wd-back-black">
<!--This is the large block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("explore","l")}
        </div>
        <div class = "col-6">
        ${ExploreComponent("m")}
        </div>
        <div class="col-4">
            ${index("l")}
        </div>
        </div>

</div>

 <div class="d-none d-md-block d-lg-none wd-fg-color-white wd-back-black">
<!-- This is the medium block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("explore","m")}
        </div>
        <div class = "col-10">
        ${ExploreComponent("m")}
        </div>
        </div>

 </div>
 
 
 <div class="d-none d-sm-block d-md-none wd-fg-color-white wd-back-black">
<!-- This is the Small block-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("explore","m")}
        </div>
        <div class = "col-10">
        ${ExploreComponent("m")}
        </div>
        </div>

 </div>
 
 <div class="d-block d-sm-none">
<!-- This is the extral small-->
        <div class="row mt-2">
        <div class="col-2">
            ${NavigationSidebar("explore","m")}
        </div>
        <div class = "col-10">
        ${ExploreComponent("m")}
        </div>
        </div>
 </div>

    `);
})($);
