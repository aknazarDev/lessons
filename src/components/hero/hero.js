import React from 'react';
import bg from "./../../asstest/img/bg.png"
import p from "./../../asstest/img/porter.png"

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero--general">
                    <img src={bg} alt="img" className="hero--general__bg"/>
                    <div className="hero--general__group">
                        <h1>ПЕРЕЕЗД ДОМОВ, КВАРТИР <br /> И ОФИСОВ</h1>
                        <ul>
                            <li>Грузовые перевозки осуществляются 24/7</li>
                            <li>Организуем комфортный переезд по Бишкеку и по <br /> всему Кыргызстану!</li>
                            <li><span>Любим и гордимся своей работой</span></li>
                        </ul>
                        <button>Вызвать</button>
                    </div>
                    <img src={p} alt="img" className="hero--general__porter"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;