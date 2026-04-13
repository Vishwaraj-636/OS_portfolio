import React, { useState, useEffect } from 'react';
import './Dock.scss';

const Dock = ({ windowsState, setwindowsState }) => {
  return (
    <footer className='dock'>
      <div onClick={() => { setwindowsState(state => ({ ...state, github: true })) }} className='icon github'><img src={`${import.meta.env.BASE_URL}dockIcons/github.svg`} /></div>

      <div onClick={() => {
        window.open("https://calendar.google.com/calendar/u/0/r?pli=1","_blank")
      }} className='icon calender'><img src={`${import.meta.env.BASE_URL}dockIcons/calender.svg`} />
</div>

      <div onClick={() => {
        window.open("https://www.linkedin.com/in/vishwarajsinghshekhawat/", "_blank")
      }} className='icon link'><img src={`${import.meta.env.BASE_URL}dockIcons/link.svg`} />
</div>

      <div onClick={() => {
        window.open("mailto:vishwaraj.singh1523@gmail.com", "_blank")
      }} className='icon mail'><img src={`${import.meta.env.BASE_URL}dockIcons/mail.svg`} />
</div>
      
      <div onClick={() => { setwindowsState(state => ({ ...state, note: true })) }} className='icon note'><img src={`${import.meta.env.BASE_URL}dockIcons/note.svg`} />
</div>
      <div onClick={() => { setwindowsState(state => ({ ...state, resume: true })) }} className='icon pdf'><img src={`${import.meta.env.BASE_URL}dockIcons/pdf.svg`} />
</div>
      <div onClick={() => { setwindowsState(state => ({ ...state, spotify: true })) }} className='icon spotify'><img src={`${import.meta.env.BASE_URL}dockIcons/spotify.svg`} />
</div>
      <div onClick={() => { setwindowsState(state => ({ ...state, cli: true })) }} className='icon cli'><img src={`${import.meta.env.BASE_URL}dockIcons/cli.svg`} /></div>
    </footer>
  );
};

export default Dock;