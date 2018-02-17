import React from 'react';

const charComponent = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAalign: 'center',
        margin: '16px',
        border: '1px solid black'
      }
    return (
        <span style={style} onClick={props.click}>
            {props.c}</span>
    )
}

export default charComponent;