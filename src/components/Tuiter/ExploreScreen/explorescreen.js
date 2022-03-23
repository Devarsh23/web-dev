import React from "react";
import Navigationsidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
import PostSummaryList from "../PostSummaryList";

const ExploreScreen = () => {
    return(
        <>
        <div className="d-none d-xxl-block wd-fg-color-white wd-back-black">
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <Navigationsidebar active="explore" size= "xl"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent size="xl"/>
                <PostSummaryList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </div>
    <div className="d-none d-xl-block d-xxl-none wd-fg-color-white wd-back-black">
        {/*this is xl block*/}
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <Navigationsidebar active="explore" size= "xl"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent size="xl"/>
                <PostSummaryList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    </div>
            <div className="d-none d-lg-block d-xl-none wd-fg-color-white wd-back-black">
                {/*This is large block*/}
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <Navigationsidebar active="explore" size= "l"/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="xl"/>
                        <PostSummaryList/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none wd-fg-color-white wd-back-black">
                {/*This is medium block*/}
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <Navigationsidebar active="explore" size= "m"/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="xl"/>
                        <PostSummaryList/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-block d-md-none wd-fg-color-white wd-back-black">
                {/*This is the small block*/}
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <Navigationsidebar active="explore" size= "m"/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="s"/>
                        <PostSummaryList/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-block d-sm-none">
                {/*This is the extra small block*/}
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                        <Navigationsidebar active="explore" size= "m"/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="s"/>
                        <PostSummaryList/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ExploreScreen;