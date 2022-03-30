import TuitList from "../tuit-list";
import WhatsHappening from "../WhatsHappening/WhatsHappening";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
// import HomeComponent from "../HomeScreen/HomeComponent";
import PostSummaryListItem from "../PostSummaryList";
const HomeScreen = () => {
    return(
        <>
        <div className="d-none d-xxl-block wd-fg-color-white wd-back-black">
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = "home" size = "xl"/>
            </div>
            <div className = "col-6">
                <WhatsHappening/>
                <TuitList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <label className="wd-search-color1">
                    <WhoToFollowList/>
                </label>
            </div>
        </div>
    </div>
    <div className="d-none d-xl-block d-xxl-none wd-fg-color-white wd-back-black">
        {/*This is xl block*/}
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = "home" size = "xl"/>
            </div>
            <div className = "col-6">
                <WhatsHappening/>
                <TuitList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <label className="wd-search-color1">
                    <WhoToFollowList/>
                </label>
            </div>
        </div>
    </div>
    <div className="d-none d-lg-block d-xl-none wd-fg-color-white wd-back-black">
        {/*This is Large block*/}
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = "home" size = "l"/>
            </div>
            <div className = "col-6">
                <WhatsHappening/>
                <TuitList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <label className="wd-search-color1">
                    <WhoToFollowList/>
                </label>
            </div>
        </div>
    </div>
    <div className="d-none d-md-block d-lg-none wd-fg-color-white wd-back-black">
        {/*This is the medium block*/}
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = "home" size = "m"/>
            </div>
            <div className = "col-6">
                <WhatsHappening/>
                <TuitList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <label className="wd-search-color1">
                    <WhoToFollowList/>
                </label>
            </div>
        </div>
    </div>
    <div className="d-none d-sm-block d-md-none wd-fg-color-white wd-back-black">
        {/*This is the small block*/}
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = "home" size = "m"/>
            </div>
            <div className = "col-6">
                <WhatsHappening/>
                <TuitList/>
            </div>
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <label className="wd-search-color1">*/}
            {/*        <WhoToFollowList/>*/}
            {/*    </label>*/}
            {/*</div>*/}
        </div>
    </div>
    <div className="d-block d-sm-none">
        {/*This is extra small block*/}
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active = "home" size = "m"/>
            </div>
            <div className = "col-6">
                <WhatsHappening/>
                <TuitList/>
            </div>
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
            {/*    <label className="wd-search-color1">*/}
            {/*        <WhoToFollowList/>*/}
            {/*    </label>*/}
            {/*</div>*/}
        </div>
    </div>


    {/*// <div>*/}
    {/*//         <WhatsHappening/>*/}
    {/*//         <TuitList/>*/}
    {/*//     </div>*/}
            </>
    )
}
export default HomeScreen;