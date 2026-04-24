import React from "react"
import headerImg from "../assets/Header.png"

function HeroSection() {
    return (
        <div>
            <h1>'Современные и стильные интерьеры для комфортной жизни'</h1>
            <img src={headerImg} alt="" />
            <div>
                <p>Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и реализацией дизайн-проектов</p>
            </div>
        </div>
    )
}

export default HeroSection