import React from "react";

function Student(props){
    return(
        <>
        <div>
            <h1>Student Info:</h1>
            <h2>Name: {props.name}</h2>
        </div>
        </>
    )
}