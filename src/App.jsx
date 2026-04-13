import React, { useState, useEffect } from 'react';
import "./app.scss"
import Dock from "./components/Dock";
import Nav from './components/Nav';
import MacWindow from './components/Windows/MacWindow';
import Github from './components/Windows/Github';
import Note from './components/Windows/Note';
import Resume from './components/Windows/Resume';
import Spotify from './components/Windows/Spotify';
import Cli from './components/Windows/Cli';

const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github &&< Github windowName="github" setwindowsState={setwindowsState} />}
      {windowsState.note && < Note windowName="note"  setwindowsState={setwindowsState} />}
      {windowsState.resume && < Resume windowName="resume"  setwindowsState={setwindowsState} />}
      {windowsState.spotify && < Spotify windowName="spotify"  setwindowsState={setwindowsState} />}
      {windowsState.cli && < Cli windowName="cli"  setwindowsState={setwindowsState} />}
    </main>
  );
};

export default App;