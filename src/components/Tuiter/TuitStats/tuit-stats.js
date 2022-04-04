// import React from "react";
// import {useDispatch} from "react-redux";
// import updateTuit from "../actions/tuits-actions";
// const TuitStats = ({tuit}) => {
//     const dispatch = useDispatch();
//     const likeTuit = () => {
//         dispatch({type: 'like-tuit', tuit});
//     };
//     return (
//         // <span onClick={likeTuit}>
//         //     {
//         //         tuit.liked &&
//         //         <i className="fas fa-heart me-1 ps-5"
//         //            style={{color: tuit.liked ? 'red': "white"}}></i>
//         //     }
//         //     {
//         //         !tuit.liked &&
//                 <div>
//                     Likes: {tuit.likes}
//                     <i onClick={() => updateTuit(dispatch, {
//                         ...tuit,
//                         likes: tuit.likes + 1
//                     })} className="far fa-heart me-1 ps-5"></i>
//                 </div>
//                 // <i className="far fa-heart me-1 ps-5"></i>
//             // }
//             // <label className="me-5">{tuit.stats && tuit.stats.likes}</label>
//         // {/*</span>*/}
//     );
// }
// export default TuitStats;