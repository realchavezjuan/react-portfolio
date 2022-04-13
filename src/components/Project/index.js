import React from "react";

function Project(props) {
    return (
        <>
            {props.projects.map((project)=> (
                <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    )
}

export default Project;