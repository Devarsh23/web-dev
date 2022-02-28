const PostSummaryListItem = (post) => {
    if (post.bigTitle === '.') {

        return (`

<div class="row pt-3">
<div class="col-1">
<img src="${post.logo}" class="wd-round-picture">
</div>
<div class="col-10 ps-3">
<label class = "wd-fg-color-white">${post.Name}</label>
      <i class="fas fa-check-circle"></i>
      <label class="text-muted">${post.UserName} - ${post.time}</label>  
      <br/>
      <label class="wd-fg-color-white"> ${post.description1} <label class="wd-fg-color-blue">${post.tag}</label>
      ${post.description2}
</div>
<div class="col-1">
<i class="fa fa-ellipsis-h"></i>
</div>
</div>
<div class="row">
<div class="col-1">
</div>
<div class="col-11 pt-2 pb-2">
            <div class="wd-rounded-corners-all-around wd-bor">
                <img src="${post.bigImage}" class="wd-rounded-corners-all-around img-fluid">
                <!--        </div>-->
            </div>
</div>
</div>
<div class="row">
<div class="col-1"> </div>
<div class = "col-11">
            <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-3 wd-grey-color wd-font-size"> <i class="far fa-comment"></i>
                <label class="text-muted ps-1">${post.comment}</label></a>
            </label>
                        <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-5 wd-grey-color wd-font-size"> <i class="fa fa-retweet"></i>
                <label class="text-muted ps-1">${post.retweet}</label></a>
            </label>
            
            <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-5 wd-grey-color wd-font-size"> <i class="fa fa-heart"></i>
                <label class="text-muted ps-1">${post.like}</label></a>
            </label>
                        <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-5 wd-grey-color wd-font-size"> <i class="fa fa-arrow-up-from-bracket"></i>
                <label class="text-muted ps-1"></label></a>
            </label>
</div>

</div>
       
    `);

    }
    else {
        return (`

<div class="row pt-2">
<div class="col-1">
<img src="${post.logo}" class="wd-round-picture">
</div>
<div class="col-10 ps-3">
<label class = "wd-fg-color-white">${post.Name}</label>
      <i class="fas fa-check-circle"></i>
      <label class="text-muted">${post.UserName} - ${post.time}</label>  
      <br/>
      <label class="wd-fg-color-white"> ${post.description1} <label class="wd-fg-color-blue">${post.tag}</label>
      ${post.description2}
</div>
<div class="col-1">
<i class="fa fa-ellipsis-h"></i>
</div>
</div>
<div class="row">
<div class="col-1">
</div>
<div class="col-11 pt-2">
            <div class="wd-rounded-corners-all-around wd-bor">
                <img src="${post.bigImage}" class="wd-rounded-corners-top img-fluid">
                <!--        </div>-->
                    <label class="wd-left12 wd-pad-bottom pt-2 border-top border-secondary">
                        <label class="wd-fg-color-white"> 
                        ${post.bigTitle}</label>
                            <label class="text-muted">
                              ${post.text}
                            </label>
                            <label class="text-muted">${post.link}</label>
                    </label>
            </div>
</div>
</div>
<div class="row">
<div class="col-1"> </div>
<div class = "col-11">
            <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-3 wd-grey-color wd-font-size"> <i class="far fa-comment"></i>
                <label class="text-muted ps-1">${post.comment}</label></a>
            </label>
                        <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-5 wd-grey-color wd-font-size"> <i class="fa fa-retweet"></i>
                <label class="text-muted ps-1">${post.retweet}</label></a>
            </label>
            
            <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-5 wd-grey-color wd-font-size"> <i class="fa fa-heart"></i>
                <label class="text-muted ps-1">${post.like}</label></a>
            </label>
                        <label>
                <a href="#" style = "text-decoration: none;" class="pt-3 ps-5 wd-grey-color wd-font-size"> <i class="fa fa-arrow-up-from-bracket"></i>
                <label class="text-muted ps-1"></label></a>
            </label>
</div>

</div>
       
    `);
    }
}
export default PostSummaryListItem;
