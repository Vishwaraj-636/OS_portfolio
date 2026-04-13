import React, { useState, useEffect } from 'react';
import MacWindow from './MacWindow';
import "./resume.scss"
const Resume = ({windowName,setwindowsState}) => {
  return (
    <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
      <div className="resumeWin">
        <iframe src="public\resume.pdf" frameborder="0"></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;