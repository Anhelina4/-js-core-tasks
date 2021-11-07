import React from 'react';

function Slider(props) {
    const {url, id} = props
    return (
        <img src={url} id={id} style={{width:"50%", height: "50%", margin:"10px"}}></img>
    );
}

export default Slider;