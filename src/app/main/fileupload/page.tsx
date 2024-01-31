"use client";
import * as React from 'react';
import FileOpen from '@mui/icons-material/FileOpen';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
import { useEffect } from 'react';
export default function FileUpload() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {

            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    document.getElementById("simulation").style.display = "none";
                    document.getElementById("label").innerHTML = "Click here";
                    return 0;
                }

                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {

            clearInterval(timer);

        };
    }, []);



    const onChange = () => {

        document.getElementById("simulation").style.display = "block";
        document.getElementById("label").innerHTML = "processing...";

    }
    return (
        <div>

            <label htmlFor="file"><FileOpen color="disabled" sx={{ fontSize: 40 }} /></label>
            <br />
            <label id='label' style={{ color: "rgba(0, 0, 0, 0.26)" }}> click here</label>
            <input onChange={onChange} id="file" type='file' hidden />
            <div id="simulation" style={{ display: "none" }} >
                <LinearProgress variant="determinate" value={progress} />
            </div>

        </div >
    )
}