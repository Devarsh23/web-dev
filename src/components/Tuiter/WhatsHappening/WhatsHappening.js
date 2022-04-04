import React, {useState} from "react";
import "./WhatsHappening.css";
import {useDispatch} from "react-redux";
import {
    createTuit
} from "../actions/tuits-actions";

const WhatsHappening = () => {
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="mt-2 d-flex flex-row">
                <div className="wd-topic d-flex flex-column ps-2 col-1">
                    <img src="/tuiter/images/elon.jpg" className="rounded-pill"></img>
                </div>
                <div className="d-flex flex-column ps-3 me-3 col-11">
                  <textarea  onChange={(e) =>
                      setNewTuit({...newTuit,
                          tuit: e.target.value})}
                              className=""
                            style={{width: "100%", color: "white", padding: "0px", backgroundColor: "black"}}
                            placeholder="What's happening?">
                  </textarea>
                </div>
            </div>
            <div className="row pb-2 pt-1">
                <div className="col-1">
                </div>
                <div className="col-9">
                    <i className="ps-3 fas fa-image" style={{color:'#1DA1F2'}}></i>
                    <i className="ps-3 fa" style={{color:'#1DA1F2'}}>&#xf080;</i>
                    <i className="ps-3 far fa-smile" style={{color:'#1DA1F2'}}></i>
                    <i className="ps-3 far fa-calendar" style={{color:'#1DA1F2'}}></i>
                </div>
                <div className="col-2">
                    <button onClick={() =>
                        createTuit(dispatch, newTuit)}
                            className="btn btn-primary rounded-pill mt-1 img-fluid">Tuit</button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;