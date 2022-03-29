import "./explore1.css"
import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";
const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        // <h1> Hello </h1>
    <div className="row pt-2 pb-2 border-bottom border-secondary">
        <div className="col-1">
            <img src={tuit['logo-image']} className="wd-round-picture "></img>
        </div>
        <div className="col-10 ps-4">
            <label className="wd-fg-color-white">{tuit.handle}</label>
            <label className="text-muted">&nbsp; @{tuit.postedBy.username} </label>
            <br></br>
            <label className="wd-fg-color-white"> {tuit.tuit} </label>
        {
            tuit.attachments && tuit.attachments.image &&
            <img src={tuit.attachments.image}
                 className="mt-2 wd-rounded-corners-all-around-video"
                 style={{width: "100%"}}/>
        }
        {
            tuit.attachments && tuit.attachments.video &&
            <iframe width="100%" height="255px"
                    className="mt-2 wd-rounded-corners-all-around-video"
                    style={{width: "100%"}}
                    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        }

            <div className="pt-2">
                <i className="far fa-comment"></i>
                <label className="wd-comment-text me-5">&nbsp;{tuit.stats.comments}</label>
                <i className="fas fa-retweet ps-3"></i>
                <label className="wd-comment-text me-3">&nbsp;{tuit.stats.retuits}</label>
                <TuitStats tuit={tuit}/>
                <i className="fas fa-external-link-alt ps-5"></i>
            </div>
            {/*<div className="pt-2">*/}
            {/*    <label>*/}
            {/*        <a href="#" style={{textDecoration: "none"}} className="pt-3 wd-grey-color wd-font-size">*/}
            {/*            <i className="far fa-comment"></i>*/}
            {/*            <label className="text-muted ">&nbsp;{tuit.stats.comments}</label></a>*/}

            {/*    </label>*/}

            {/*    <label>*/}
            {/*        <a href="#" style={{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size">*/}
            {/*            <i className="fa fa-retweet"></i>*/}
            {/*            <label className="text-muted ps-1">&nbsp;{tuit.stats.retuits}</label></a>*/}
            {/*    </label>*/}

            {/*    <label>*/}
            {/*        <a href="#" style={{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size">*/}
            {/*            <i className="fa fa-heart"></i>*/}
            {/*            <label className="text-muted ps-1">&nbsp;{tuit.stats.likes}</label></a>*/}
            {/*    </label>*/}
            {/*    <label>*/}
            {/*        <a href="#" style={{textDecoration: "none"}} className="pt-3 ps-5 wd-grey-color wd-font-size">*/}
            {/*            <i className="fas fa-external-link-alt ps-4"></i>*/}
            {/*            <label className="text-muted ps-1"></label></a>*/}
            {/*    </label>*/}
            {/*</div>*/}

        </div>
        <div className="col-1">
            <i onClick={() => deleteTuit(tuit)} className="fa">&#xf00d;</i>
            {/*<i className="fa fa-remove fa-pull-right"></i>*/}
            {/*<i className="fa fa-icon-remove-sign"></i>*/}
            {/*<i className="fa fa-ellipsis-h"></i>*/}
        </div>

    </div>


);
}

export default TuitListItem;