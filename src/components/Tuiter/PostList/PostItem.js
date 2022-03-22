const PostSummaryListItem = (post) => {
    if (post.bigTitle === '.') {

        return (`

<div className="row pt-3">
<div className="col-1">
<img src="{post.logo}" className="wd-round-picture">
</div>
<div className="col-10 ps-3">
<label className = "wd-fg-color-white">${post.Name}</label>
      <i className="fas fa-check-circle"></i>
      <label className="text-muted">${post.UserName} - ${post.time}</label>  
      <br/>
      <label className="wd-fg-color-white"> ${post.description1} <label className="wd-fg-color-blue">${post.tag}</label>
      ${post.description2}
</div>
<div className="col-1">
<i className="fa fa-ellipsis-h"></i>
</div>
</div>
<div className="row">
<div className="col-1">
</div>
<div className="col-11 pt-2 pb-2">
            <div className="wd-rounded-corners-all-around wd-bor">
                <img src="{post.bigImage}" className="wd-rounded-corners-all-around img-fluid">
                <!--        </div>-->
            </div>
</div>
</div>
<div className="row">
<div className="col-1"> </div>
<div className = "col-11">
            <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-3 wd-grey-color wd-font-size"> <i className="far fa-comment"></i>
                <label className="text-muted ps-1">${post.comment}</label></a>
            </label>
                        <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size"> <i className="fa fa-retweet"></i>
                <label className="text-muted ps-1">${post.retweet}</label></a>
            </label>
            
            <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size"> <i className="fa fa-heart"></i>
                <label className="text-muted ps-1">${post.like}</label></a>
            </label>
                        <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size"> <i className="fa fa-arrow-up-from-bracket"></i>
                <label className="text-muted ps-1"></label></a>
            </label>
</div>

</div>
       
    `);

    }
    else {
        return (`

<div className="row pt-2">
<div className="col-1">
<img src="{post.logo}" className="wd-round-picture">
</div>
<div className="col-10 ps-3">
<label className = "wd-fg-color-white">${post.Name}</label>
      <i className="fas fa-check-circle"></i>
      <label className="text-muted">${post.UserName} - ${post.time}</label>  
      <br/>
      <label className="wd-fg-color-white"> ${post.description1} <label className="wd-fg-color-blue">${post.tag}</label>
      ${post.description2}
</div>
<div className="col-1">
<i className="fa fa-ellipsis-h"></i>
</div>
</div>
<div className="row">
<div className="col-1">
</div>
<div className="col-11 pt-2">
            <div className="wd-rounded-corners-all-around wd-bor">
                <img src="{post.bigImage}" className="wd-rounded-corners-top img-fluid">
                <!--        </div>-->
                    <label className="wd-left12 wd-pad-bottom pt-2 border-top border-secondary">
                        <label className="wd-fg-color-white"> 
                        {post.bigTitle}</label>
                            <label className="text-muted">
                              {post.text}
                            </label>
                            <label className="text-muted">${post.link}</label>
                    </label>
            </div>
</div>
</div>
<div className="row">
<div className="col-1"> </div>
<div className = "col-11">
            <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-3 wd-grey-color wd-font-size"> <i className="far fa-comment"></i>
                <label className="text-muted ps-1">{post.comment}</label></a>
            </label>
                        <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size"> <i className="fa fa-retweet"></i>
                <label className="text-muted ps-1">{post.retweet}</label></a>
            </label>
            
            <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size"> <i className="fa fa-heart"></i>
                <label className="text-muted ps-1">{post.like}</label></a>
            </label>
                        <label>
                <a href="#" style = {{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size"> <i className="fa fa-arrow-up-from-bracket"></i>
                <label className="text-muted ps-1"></label></a>
            </label>
</div>

</div>
       
    `);
    }
}
export default PostSummaryListItem;
