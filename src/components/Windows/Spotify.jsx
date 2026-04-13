import React, { useState, useEffect } from 'react';
import MacWindow from './MacWindow';
import "./spotify.scss"
const Spotify = ({windowName,setwindowsState}) => {
  return (
    <MacWindow width='25vw' windowName={windowName} setwindowsState={setwindowsState} >
          <div className="spotifyWin">
              <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/6h3Bs65WbMkDok1f2xhH2F?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
    </MacWindow>
  );
};

export default Spotify;