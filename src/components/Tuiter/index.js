import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/explorescreen"
// import HomeScreen from "./HomeScreen/HomeScreen";
import {Outlet} from "react-router-dom";

import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList"
import HomeScreen from "./home-screen"
import profileReducer from "./reducers/profile-reducer";
import whoReducer from "./reducers/who-reducer";
// import {createStore} from "redux";
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuit-reducer";
import {combineReducers, createStore} from "redux";
import Profile from "./Profile";
// const store = createStore(whoReducer);
const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer, profile: profileReducer
});
const store = createStore(reducer);



const Index = () => {
    return(
        <>
            <Provider store={store}>
            <Outlet/>
            {/*<div className="row mt-2">*/}
            {/*    <div className="col-2 col-lg-1 col-xl-2">*/}
            {/*        <NavigationSidebar/>*/}
            {/*    </div>*/}
            {/*    <div className="col-10 col-lg-7 col-xl-6">*/}
            {/*        /!*<Outlet/>*!/*/}
            {/*        /!*<HomeScreen/>*!/*/}
            {/*        <Profile/>*/}
            {/*    </div>*/}
            {/*    /!*<div className="d-none d-lg-block col-lg-4 col-xl-4">*!/*/}
            {/*    /!*    <WhoToFollowList/>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            </Provider>

        </>
    )
};


export default Index;