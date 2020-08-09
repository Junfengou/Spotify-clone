//Creating the inital data layer 
export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finish developing
    token: "BQBeNcbslehiPaHnb9XYYxROSNl0UEdCN6c4_BpFLSASRmDsjfmZcXZwCs9YdjCFv26c9ra2apMRlX31AlDrwk58kVd_eEkrTV7L5DzRYNuFHoFs7vpxVsoSdFirVXEoKNgHX6VnKUjyFmx6GZRw2G73DAZin8hp"
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
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }

        //if nothing changes, return the state
        default: 
            return state;
    }
};


export default reducer;