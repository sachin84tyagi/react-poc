import React from 'react';
import "./_circle.scss";

const Circle = (props) => {
    return (
        <span class={`btn circle ${props.className} icon-pos`} style={{ right: "20px", zIndex: -1000 }
        }></span >
    );
}

export default Circle;