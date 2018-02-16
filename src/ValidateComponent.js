import React from 'react';
// import './Person.css';

const validateComp = (props) => {
    if (props.length < 5){
        return (
            <div>Text too short</div>
        )
    } else {
        return (
            <div>Text long enough</div>
        )
    }
}

export default validateComp;