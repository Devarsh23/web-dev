import "./profile.css"
const ProfileComponent = ({profile}) => {
    return(
        <>
            <div className="row">
                <div className="col-1">

                    <i className="fa wd-white">&#xf060;</i>
                </div>
                <div className="col-11">
                    <label>
                        <b className="wd-white">
                            {/*Devarsh Patel*/}
                            {profile.firstName} {profile.lastName}
                        </b>
                        <br></br>
                        <label className="wd-font-tweets">
                        5,196 Tweets
                        </label>
                    </label>
                </div>
            </div>
            <div className="wd-container">
                <label className="pe-1">
                <img src = {profile.bannerPicture} className="wd-wi"></img>
                </label>
                <img src = {profile.profilePicture} className="wd-boxborder-me rounded-pill wd-overlay"></img>
                <label className="float-end me-5 mt-3 wd-button-size">
                <button type="button" className="btn rounded-pill border-secondary"><h5 className="pt-1">Edit Profile</h5></button>
                </label>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="pt-1">
            <h5> {profile.firstName} {profile.lastName}</h5>
                <label className="wd-color-grey"> @ {profile.handle}</label> <br></br>
                <label className="wd-white">
                    {profile.bio}
                </label>
                <label className="wd-color-grey">
                    <i className="fa fa-map-marker-alt" ></i>
                    &nbsp; {profile.location} &nbsp;
                    <i className="fa fa-golf-ball"></i>&nbsp;
                    Born {profile.dateOfBirth} &nbsp;
                    <i className="fas fa-calendar-alt"></i> &nbsp;
                    Joined {profile.dateJoined}
                    <br></br>
                    <label className="wd-white">{profile.followingCount} </label>&nbsp;
                    Following &nbsp;

                    <label className="wd-white">{profile.followersCount}  </label>&nbsp;
                    Followers &nbsp;
                </label>
            </div>


            {/*<div className="row">*/}
            {/*<button type="button" className="btn btn-primary">Primary</button>*/}
            {/*</div>*/}
            </>
    );
}

export default ProfileComponent;