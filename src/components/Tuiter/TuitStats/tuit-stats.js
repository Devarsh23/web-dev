import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <span onClick={likeTuit}>
            {
                tuit.liked &&
                <i className="fas fa-heart me-1 ps-5"
                   style={{color: tuit.liked ? 'red': "white"}}></i>
            }
            {
                !tuit.liked &&
                <i className="far fa-heart me-1 ps-5"></i>
            }
            <label className="me-5">{tuit.stats && tuit.stats.likes}</label>
        </span>
    );
}
export default TuitStats;