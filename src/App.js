import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

// A wrapper that handles all the communication to spotify and react
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null); 

  // Run code based on a given condition
  // Come back here and do more research 
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; //hide the access token for security purposes

    const _token = hash.access_token

    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      //getMe method gets the end user info and you could display it in console
      spotify.getMe().then(user => {
        console.log("person: " , user)
      }); // get the user account
    }

    console.log("I have a token ", token);

  }, []);

  return (
    <div className="App">
      {/*Spotify logo */}
      {/* Login with spotify button */}

      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
