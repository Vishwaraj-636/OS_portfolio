import React, { useState, useEffect } from 'react';
import MacWindow from './MacWindow';
import "./resume.scss"
const Resume = ({ windowName, setwindowsState }) => {
  return (
    <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
      <div className="resumeWin">
        <iframe
          src={`${import.meta.env.BASE_URL}resume.pdf`}
          frameBorder="0"
          title="Resume"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Resume;