import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'auto', borderTop: '2px solid #ccc', height: '500px'}}>
            {props.children}
        </div>
    );
} 

export default Scroll;