  
// https://developer.spotify.com/documentation/
// web-playback-sdk/quick-start/#

//Using spotify api to authenticate user 
export const authEndpoint = "https://accounts.spotify.com/authorize";

// ID generated by spotify developer project 
const clientId ="b7f26e8b98344278ade610d78275ffcf";

// Once logged in, user is being redirected back to the localhost 
const redirectUri = "http://localhost:3000/";


// Permission to access api functions MUST HAVE
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];


// Look back here and do more research on reduce 

//#accessToken=supersecretkey&name=Junkoolz
  export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1) // take the first item 
      .split("&") // before the "&" : #accessToken=supersecretkey&
      .reduce((initial, item) => {
        var parts = item.split("="); // split anything after "="
        initial[parts[0]] = decodeURIComponent(parts[1]); 
        // parse out the "supersecretkey" 
        // essentially pulling the access token 
        return initial;
      }, {});
  };

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;