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
            <ProjectCard
            title='ЖК ПРАВОБЕРЕЖНЫЙ'
            sqare={112}
            year='2023'
            link='/project1'
            image={project1img}
            isNew={true}
            />
            <ProjectCard 
            title='ЖК НОРВЕЖСКИЙ ПАРК'
            sqare={75}
            year='2023'
            link='/project2'
            image={project2img}
            isNew={true}
            />
            <ProjectCard
            title='ЖК СОСНОВСКИЕ ОЗЕРА'
            sqare={94}
            year='2022'
            link='/project3'
            image={project3img}
            isNew={true}
            />
            <Button 
             text='Смотреть все проекты'
             />
        </div>
    )
}

export default Projects