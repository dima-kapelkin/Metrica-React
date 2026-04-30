import project1img from "../../assets/project 1.jpg"
import project2img from "../../assets/project 2.jpg"
import project3img from "../../assets/project 3.jpg"
import ProjectCard from "./ProjectCard"
import Button from "../Button/Button"
import Heading from "../Heading/Heading"

function Projects() {
    return (
        <div>
            <Heading 
            level='h2'
            text='Проекты'
            />
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <Button 
             text='Смотреть все проекты'
             />
        </div>
    )
}

export default Projects