import React, {useState} from 'react';

function WindowText(props) {
    const [visible, setVisible] = useState(false)
    const toggleVisible=()=>{
        setVisible(!visible)
    }
    return (
        <div>
            <p style={{margin:"0"}}>Hello, subscribers.</p>
            <button style={{color:"blue", fontSize:"10px", textDecoration:"underline", border:"none", background:"white"}}
            onClick={toggleVisible}>Show more</button>
            {visible ? 
            <>
            <p>Hello, subscribers. Again, again.</p>
            <p>Hello, subscribers. Again, again!Again, again. Again, again.</p>
            </>: null}
            
        </div>
    );
}

export default WindowText;