import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'edit-profile':
            return state.map(temp => {
                temp.name = action.profile.name;
                temp.bio = action.profile.bio;
                temp.location = action.profile.location;
                temp.website = action.profile.website;
                temp.dateOfBirth = action.profile.dateOfBirth;
                return temp
            });
        default:
            return profile;
    }
}

export default profileReducer;
