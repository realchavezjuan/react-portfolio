import React from "react";
import beeSS from "../../assets/images/spellingBeeScreenshot.png"
import learnSS from "../../assets/images/learnItScreenshot.png"
import beatSS from "../../assets/images/beatHubScreenshot.png"

function Project(props) {

    const solveSS = (title) => {

        switch (title) {
            case "Spelling-Bee":
                return beeSS;
            case "Learn It":
                return learnSS;
            case "BeatHub":
                return beatSS;
            default:
                return "";
        }

    }
    

    return (
        <>
            {props.projects.map((project, i)=> (
                <div key={i}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.url}>
                        <img src={solveSS(project.title)} alt="" height="250" style={{border: 'solid black'}}/>
                    </a>
                </div>
            ))}
        </>
    )
}

export default Project;