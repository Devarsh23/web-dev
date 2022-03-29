import tuits from "../data/tuit.json";

const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                tuit: action.tuit,
                _id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "ReactJS"
                },handle:"ReactJS",
                "logo-image":"../../tuiter/images/elon.jpg",
                stats: {
                    retuits: 111,
                    likes: 222,
                    replies: 333
                }
            }
            return [
                newTuit,
                ...state,
            ];
            case 'delete-tuit':
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        case 'like-tuit':
            return state.map(tuit => {
                if(tuit._id === action.tuit._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        default:
            return tuits
    }

    // return tuits;
}

export default tuitsReducer;