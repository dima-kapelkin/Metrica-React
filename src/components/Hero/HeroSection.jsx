import React from "react"
import headerImg from "../../assets/Header.png"
import Heading from "../../components/Heading/Heading"
import'./Hero.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <Heading
            level='h1'
            text='Современные и стильные интерьеры для комфортной жизни'
            />
            <img src={headerImg} alt="" />
            <div>
                <p>Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и реализацией дизайн-проектов</p>
            </div>
        </div>
    )
}

export default HeroSection