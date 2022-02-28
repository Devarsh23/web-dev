import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
               <div>
            <div class="row">
                       <!-- search field and cog -->
                    <div class="col-10 ps-4">
                        <div class="wd-rounded-corners-all-around wd-search-color wd">
                            <i class="fa fa-search ms-2 wd-fg-search-color"></i>
                <input class="wd-textarea wd-search-color" placeholder="Search Twitter"/>
                        </div>
                    </div>
                    <div class="col-2">
                        <label class="wd-size-xxl ps-3">
                            <a href="explore-settings.html" style = "text-decoration: none";>
                        <i class="fa fa-gear fa-inverse wd-gear"></i>
                            </a>
                        </label>


                    </div>
                </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                                          <li class="nav-item wd-new-tab ">
                        <a class="nav-link active" style="color: white" aria-current="page" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-fg-search-color" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-fg-search-color" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-fg-search-color" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-fg-search-color" href="#">Entertainment</a>
                    </li>
           </ul>
           <!-- image with overlaid text -->
                     <div class="pt-1 position-relative">
                    <img src="../spacex.jpg" class="card-img" width="100%">
                    <div class="card-img-overlay h-100 d-flex flex-column justify-content-end">
                        <h1 class="card-title wd-spacex-1 bottom-50" >SpaceX's Starship</h1>
                    </div>
                </div>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
