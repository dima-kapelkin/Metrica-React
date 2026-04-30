import project1img from "../../assets/project 1.jpg"

function ProjectCard(props) {
    return (
        <div>
            <div>{props.isNew}</div>
            <img src={props.image} alt={props.title} />
            <p>{props.title} — {props.sqare}м² — {props.year}</p>
            <a href={props.link}>Подробнее</a>
        </div>
    )
}

export default ProjectCard