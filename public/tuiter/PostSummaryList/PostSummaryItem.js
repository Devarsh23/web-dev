const PostSummaryListItem = (post) => {
    return(`
<div class=" ps-2 pt-2 pb-2">
<div class="row">
                    <div class="col-9">
                        <label class="text-muted">${post.topic}</label></br>
                        <label class="wd-size-xxl"><b>${post.userName}</b>
<!--                            <i class="fa fa-circle-check ms-2"></i>-->
                        </label>
                        <i class="fas fa-check-circle wd-fg-color-white"></i>
                        <label class="text-muted">- ${post.time}</label></br>
                        <b>${post.title}</b>
                    </div>
                        <div class="col-3">
                        <div class="pt-2 pe-2">
                            <img src=${post.image} class="wd-rounded-corners-logo img-fluid float-end">
                        </div>  
                    </div>
                    </div>
                    </div>
       
    `);
}
export default PostSummaryListItem;
