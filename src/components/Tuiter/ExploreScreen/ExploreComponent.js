import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
        return (
            <>
               <div>
            <div className="row">
                    <div className="col-10 ps-4">
                        <div className="wd-rounded-corners-all-around wd-search-color wd">
                            <i className="fa fa-search ms-2 wd-fg-search-color"></i>
                            <input className="wd-textarea wd-search-color" placeholder="Search Twitter"></input>
                        </div>
                    </div>
                    <div className="col-2">
                        <label className="wd-size-xxl ps-3">
                            <a href="explore-settings.html" style = {{textDecoration: "none"}}>
                        <i className="fa fa-gear fa-inverse wd-gear"></i>
                            </a>
                        </label>


                    </div>
                </div>
           <ul className="nav mb-2 nav-tabs">
                    <li className="nav-item wd-new-tab ">
                        <a className="nav-link active" style={{color: "white"}} aria-current="page" href="#">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-fg-search-color" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-fg-search-color" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-fg-search-color" href="#">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-fg-search-color" href="#">Entertainment</a>
                    </li>
           </ul>
                    <div className="pt-1 position-relative">
                        <img src="/tuiter/images/spacex.jpg" className="card-img" width="100%"></img>
                    <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                        <h1 className="card-title wd-spacex-1 bottom-50" >SpaceX's Starship</h1>
                    </div>
                </div>
                </div>
           {PostSummaryList()}
    </>
);

}
export default ExploreComponent;
