import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// A wrapper that handles all the communication to spotify and react
const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null); 
  
  //To grab anything from the data, it needs to be in this object [{}]
  //Dispatch handles all the changes
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  // Come back here and do more research 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //hide the access token for security purposes

    const _token = hash.access_token

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      
      //instead of setting the token, use dispatch to set token
      //setToken(_token);
      spotify.setAccessToken(_token);

      //getMe method gets the end user info and you could display it in console
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      }); // get the user account

      //Accessing the api and get the current user's playlist 
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    //console.log("I have a token ", token);

  }, []);

  //console.log("User: ", user);
  //console.log("Token: ", token);

  return (
    <div className="App">
      {/*Spotify logo */}
      {/* Login with spotify button */}

      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
