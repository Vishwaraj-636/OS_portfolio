import React, { useState, useEffect } from 'react';
import MacWindow from './MacWindow';
import "./Note.scss"
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({windowName,setwindowsState}) => {
    const [markdown, setmarkdown] = useState(null)
    useEffect(() => {
        fetch("/note.txt")
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])

    return (
        <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
            <div className="noteWindow">
                {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    );
};

export default Note;