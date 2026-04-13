import React, { useState, useEffect } from 'react';
import './Dock.scss';
import githubIcon from '../assets/dockIcons/github.svg';
import calendarIcon from '../assets/dockIcons/calender.svg';
import linkIcon from '../assets/dockIcons/link.svg';
import mailIcon from '../assets/dockIcons/mail.svg';
import noteIcon from '../assets/dockIcons/note.svg';
import pdfIcon from '../assets/dockIcons/pdf.svg';
import spotifyIcon from '../assets/dockIcons/spotify.svg';
import cliIcon from '../assets/dockIcons/cli.svg';

const Dock = ({ windowsState, setwindowsState }) => {
  return (
    <footer className='dock'>
      <div onClick={() => { setwindowsState(state => ({ ...state, github: true })) }} className='icon github'><img src={githubIcon} alt="" /></div>

      <div onClick={() => {
        window.open("https://calendar.google.com/calendar/u/0/r?pli=1","_blank")
      }} className='icon calender'><img src={calendarIcon} />
</div>

      <div onClick={() => {
        window.open("https://www.linkedin.com/in/vishwarajsinghshekhawat/", "_blank")
      }} className='icon link'><img src={linkIcon} />
</div>

      <div onClick={() => {
        window.open("mailto:vishwaraj.singh1523@gmail.com", "_blank")
      }} className='icon mail'><img src={mailIcon} />
</div>
      
      <div onClick={() => { setwindowsState(state => ({ ...state, note: true })) }} className='icon note'><img src={noteIcon} />
</div>
      <div onClick={() => { setwindowsState(state => ({ ...state, resume: true })) }} className='icon pdf'><img src={pdfIcon} />
</div>
      <div onClick={() => { setwindowsState(state => ({ ...state, spotify: true })) }} className='icon spotify'><img src={spotifyIcon} />
</div>
      <div onClick={() => { setwindowsState(state => ({ ...state, cli: true })) }} className='icon cli'><img src={cliIcon} /></div>
    </footer>
  );
};

export default Dock;