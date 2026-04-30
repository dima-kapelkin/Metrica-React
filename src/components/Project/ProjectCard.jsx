import project1img from "../../assets/project 1.jpg"

function ProjectCard() {
    return (
        <div>
            <div>NEW</div>
            <img src={project1img} alt="" />
            <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
            <a href="">Подробнее</a>
        </div>
    )
}

export default ProjectCard