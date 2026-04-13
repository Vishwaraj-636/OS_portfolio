import React, { useState, useEffect } from 'react';
import './Dock.scss';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Dock = ({ windowsState, setwindowsState }) => {
  return (
    <footer className='dock'>
      <div onClick={() => { setwindowsState(state => ({ ...state, github: true })) }} className='icon github'><img src="public\dockIcons\github.svg" alt="" /></div>

      <div onClick={() => {
        window.open("https://calendar.google.com/calendar/u/0/r?pli=1","_blank")
      }} className='icon calender'><img src="public\dockIcons\calender.svg" alt="" /></div>

      <div onClick={() => {
        window.open("https://www.linkedin.com/in/vishwarajsinghshekhawat/", "_blank")
      }} className='icon link'><img src="public\dockIcons\link.svg" alt="" /></div>

      <div onClick={() => {
        window.open("mailto:vishwaraj.singh1523@gmail.com", "_blank")
      }} className='icon mail'><img src="public\dockIcons\mail.svg" alt="" /></div>
      
      <div onClick={() => { setwindowsState(state => ({ ...state, note: true })) }} className='icon note'><img src="public\dockIcons\note.svg" alt="" /></div>
      <div onClick={() => { setwindowsState(state => ({ ...state, resume: true })) }} className='icon pdf'><img src="public\dockIcons\pdf.svg" alt="" /></div>
      <div onClick={() => { setwindowsState(state => ({ ...state, spotify: true })) }} className='icon spotify'><img src="public\dockIcons\spotify.svg" alt="" /></div>
      <div onClick={() => { setwindowsState(state => ({ ...state, cli: true })) }} className='icon cli'><img src="public\dockIcons\cli.svg" alt="" /></div>
    </footer>
  );
};

export default Dock;