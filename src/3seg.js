import React from "react";
import "./3seg.css";
function Seg3(params) {
    return (
        <div className="seg3">
            <div className="top">
                <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt={`${params.ico}`} style={{ width: '48px', height: '48px' }} />
                <h6 style={{textDecorationColor:`${params.c}`}}>{params.topic}</h6>
            </div>
            <div className="btm">
                <p>{params.para}</p>
            </div>
        </div>
    );
}

export default Seg3;