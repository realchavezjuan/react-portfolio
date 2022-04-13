import React from "react";
import Project from "../Project";

function Portfolio(){
    const projects = [
        {
            title: "project one",
            description: "fun"
        },
        {
            title: "project two",
            description: "exciting"
        },
        {
            title: "project three",
            description: "challenging"
        },
        {
            title: "project four",
            description: "easy"
        },
    ]

    return (
    <section>
        <h1>Portfolio</h1>
        <Project projects={projects} />
    </section>
    )
}

export default Portfolio;