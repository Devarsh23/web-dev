import React from "react";
import Profile from "../data/profile.json";

// import TuitList from "../tuit-list";
// import WhatsHappening from "../WhatsHappening/WhatsHappening";
import NavigationSidebar from "../NavigationSidebar";
import ProfileComponent from "./ProfileComponent"
import WhoToFollowList from "../WhoToFollowList"
const ProfileScreen = () => {
    return(

        <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
            <div className="d-none d-xxl-block wd-fg-color-white wd-back-black">
            <NavigationSidebar active = "profile" size = "xl"/>
            </div>
            <div className="d-none d-xl-block d-xxl-none wd-fg-color-white wd-back-black">
                <NavigationSidebar active = "profile" size = "xl"/>
            </div>
            <div className="d-none d-lg-block d-xl-none wd-fg-color-white wd-back-black">
                <NavigationSidebar active = "profile" size = "l"/>
            </div>
            <div className="d-none d-md-block d-lg-none wd-fg-color-white wd-back-black">
                <NavigationSidebar active = "profile" size = "m"/>
            </div>
            <div className="d-none d-sm-block d-md-none wd-fg-color-white wd-back-black">
                <NavigationSidebar active = "profile" size = "m"/>
            </div>
            <div className="d-block d-sm-none">
                <NavigationSidebar active = "profile" size = "m"/>
            </div>

        </div>
        <div className="col-10">
            {/*<Outlet/>*/}
            {/*<HomeScreen/>*/}
            {/*<ProfileComponent/>*/}
            {
                Profile.map(id =>
                <ProfileComponent key = {id.dateOfBirth} profile = {id}/>
                )
            }

        </div>

    </div>

        // <div className="row mt-2">
        //     <div className="col-2">
        //     <NavigationSidebar/>
        //     </div>
        //     <div className="col-10">
        //     <ProfileComponent/>
        //     </div>
        //     <div className="col-2">
        //         <WhoToFollowList/>
        //     </div>
        // </div>
    )
}
export default ProfileScreen;