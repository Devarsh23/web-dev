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
            <NavigationSidebar active = "profile" size = "xl"/>
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
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