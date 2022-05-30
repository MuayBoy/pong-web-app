import React from "react";
import "../Styles/pong.scss"
import "../Pong"

export default function Pong() {
    return (
        <div className="game idle">
            <div className="paddle one"></div>
            <div className="ball"></div>
            <div className="paddle two"></div>
            <div className="start">
                <button>Start</button>
                <small>or press enter</small>
            </div>
            <div className="scores onescore">0</div>
            <div className="scores twoscore">0</div>
        </div>
    );
}