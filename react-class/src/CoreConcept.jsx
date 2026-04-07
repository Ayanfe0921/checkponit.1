import React from "react";
import './App.css';

const CoreConcept = (props) => {
    return (
        <div>
            <img className="image" src={props.image} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export { CoreConcept };



