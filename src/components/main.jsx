import React from 'react';
import './main.css';
import videoBg from '../assets/pexels-mart-production-7565817 (1080p).mp4';

const Main = () => {
    return (
        <div className="main">
            <div className="overlay"></div>    
            <video src={videoBg} autoPlay loop muted />
                <div className="content">
                    <h1>Welcome</h1>
                    <p>To my site.</p>
                </div>
        </div>
    );
}

export default Main;