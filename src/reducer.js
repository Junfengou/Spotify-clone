//Creating the inital data layer 
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
};

// state is how it currently look which means it could look like initialState or something else
// action is what modify the situation
const reducer = (state, action) => {
    console.log("Action", action); //debug 
    
    // action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                //keep whatever is in current state, update the user slice with whatever the user.action was
                ...state,
                user: action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            };

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            };

        //if nothing changes, return the state
        default: 
            return state;
    }
};


export default reducer;