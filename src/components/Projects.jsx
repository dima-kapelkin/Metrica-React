import project1img from "../assets/project 1.jpg"
import project2img from "../assets/project 2.jpg"
import project3img from "../assets/project 3.jpg"

function Projects() {
    return (
        <div>
            <h2>Проекты</h2>
            <div>
                <div>NEW</div>
                <img src={project1img} alt="" />
                <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
                <a href="">Подробнее</a>
            </div>
            <div>
                <img src={project2img} alt="" />
                <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
                <a href="">Подробнее</a>
            </div>
            <div>
                <img src={project3img} alt="" />
                <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
                <a href="">Подробнее</a>
            </div>
            <button>Смотреть все проекты</button>
        </div>
    )
}

export default Projects