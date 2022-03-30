import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "./profile.css"
const EditProfileComponent = ({profile}) => {
    const navigate = useNavigate();
    const profileValue = {
        name: 'Jose Annunziato', handle: 'jannunzi',
        profilePicture: '/tuiter/images/test.jpeg', bannerPicture: '/tuiter/images/webDev.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
        followingCount: 312,	followersCount: 180
    }
    let [PreviousProfile, setPreviousProfile] = useState(profileValue);
    const editHandler = () => {
        dispatch({type: 'edit-profile',
            profile: PreviousProfile
        });
        navigate("/tuiter/profile")
    }
    const dispatch = useDispatch();
    return(
        <>
            <div className="row">
                <div className="col-1">
                    <i className="fa wd-white" onClick={() => navigate("/tuiter/profile")}>&#xf00d;</i>
                </div>
                <div className="col-10">
                    <label>
                        <b className="wd-white">
                            {/*Devarsh Patel*/}
                            {profile.name}
                        </b>
                        <br></br>
                        <label className="wd-font-tweets">
                            5,196 Tweets
                        </label>
                    </label>
                </div>
                <div className="col-1">
                    <label className="float-right">
                    <button type="button" className="btn rounded-pill border-secondary wd-check" onClick={editHandler}>
                        <h5 className="pt-1 wd-black">Save</h5>
                    </button>
                    </label>
                </div>
            </div>

            <div className="wd-container">
                <label className="pe-1">
                    <img src = {profile.bannerPicture} className="wd-wi"></img>
                </label>
                <img src = {profile.profilePicture} className="wd-boxborder-me rounded-pill wd-overlay"></img>
                {/*<label className="float-end me-5 mt-3 wd-button-size">*/}
                {/*    <button type="button" className="btn rounded-pill border-secondary"><h5 className="pt-1">Edit Profile</h5></button>*/}
                {/*</label>*/}
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="ms-3">
                <div>
                    <label className="wd-grey-color">Name</label>
                    <br></br>
                    <textarea defaultValue={profile.name} onChange={(event) =>
                        setPreviousProfile({...PreviousProfile, name: event.target.value})}
                              className="wd-name">
                    </textarea>
                    <br></br>
                    <label>Bio</label>
                    <br></br>
                    <textarea defaultValue={profile.bio} onChange={(event) =>
                        setPreviousProfile({...PreviousProfile, bio: event.target.value})}
                              className="wd-name">
                    </textarea>
                    <br></br>
                    <label>Location</label>
                    <br></br>
                    <textarea defaultValue={profile.location} onChange={(event) =>
                        setPreviousProfile({...PreviousProfile, location: event.target.value})}
                              className="wd-name">
                    </textarea>
                    <br></br>
                    <label>Website</label>
                    <br></br>
                    <textarea defaultValue={profile.website} onChange={(event) =>
                        setPreviousProfile({...PreviousProfile, website: event.target.value})}
                              className="wd-name">
                    </textarea>
                    <br></br>
                    <label>Date of Birth</label>
                    <br></br>
                    <textarea defaultValue={profile.dateOfBirth} onChange={(event) =>
                        setPreviousProfile({...PreviousProfile, dateOfBirth: event.target.value})}
                              className="wd-name">
                    </textarea>
                </div>
            </div>
        </>
    );
}

export default EditProfileComponent;