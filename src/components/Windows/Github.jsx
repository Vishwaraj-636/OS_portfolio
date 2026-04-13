import React, { useState, useEffect } from 'react';
import MacWindow from './MacWindow';
import githubData from "../../assets/github.json"
import "./Github.scss"

const GitCrd = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demolink: "" } }) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='desc'>{data.description}</p>
        <div className="tags">
            {data.tags.map(
                tag => <p className='tag'>
                    {tag}
                </p>
            )}
        </div>
        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demolink && <a href={data.demolink}>Demo Link</a>}
        </div>
    </div>
}


const Github = ({windowName,windowsState,setwindowsState}) => {
    return (
        <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
            <div className="cards">
                {githubData.map(project => {
                    return <GitCrd data={project} />
                })}
            </div>
        </MacWindow>
    );
};

export default Github;