import React, {useEffect} from "react";
// import tuits from "./tuits.json";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem
    from "./tuit-list-item";
// import * as service from "../../services/tuits-services"
import {createTuit,deleteTuit,findAllTuits}
    from "../actions/tuits-actions";
// import {useSelector} from "react-redux";
// import './tuits.css';
const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);

    const dispatch = useDispatch();
    // const findAllTuits = async () => {
    //     const tuits = await service.findAllTuits();
    //     dispatch({
    //         type: 'FIND_ALL_TUITS',
    //         tuits: tuits
    //     });
    // }
    // useEffect(findAllTuits, []);

    useEffect(() =>
            findAllTuits(dispatch),
        []);


    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;