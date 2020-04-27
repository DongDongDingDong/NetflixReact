import React from 'react';
import Img from '../images/tab-1-pic.png';

export default function TabContentOne() {
    return (
        <div>
            <div className="container">
                <div className="tab-content">
                    <span> If you decide Netflix isnt for you - no problem. No commitment. Cancel online sanytime</span>
                    <br />
                    <button>try it now</button>
                    <img src={Img} />
                </div>
            </div>
        </div>
    )
}
