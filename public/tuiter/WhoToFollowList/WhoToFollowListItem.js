const WhoToFollowList = (who,size) => {
    if (size === "xl") {
        return (`
            <li class="list-group-item">
            <img src="${who.avatarIcon}" class="rounded-pill">
                <label class="h6 ps-2 wd-fg-color-white wd-l-size">${who.userName} 
                <i class="fas fa-check-circle wd-fg-color-white"></i>
                <br>
                <label class="text-muted">${who.handle}</label>
                </label>
                
                <label class="pt-2 float-end">
                <button class="btn rounded-pill btn-primary float-end ">Follow</button>
            </label>
            </li>
       
    `);
    }
    else {
        return (`
            <li class="list-group-item">
            <img src="${who.avatarIcon}" class="rounded-pill">
                <label class="h6 ps-2 wd-fg-color-white wd-l-size">${who.userName} 
                <i class="fas fa-check-circle wd-fg-color-white"></i>
                <br>
                <label class="text-muted">${who.handle}</label>
                </label>
                
                <label class="pt-2 float-end">
                <button class="btn btn-sm rounded-pill btn-primary float-end ">Follow</button>
            </label>
            </li>
       
    `);
    }
}
export default WhoToFollowList;
