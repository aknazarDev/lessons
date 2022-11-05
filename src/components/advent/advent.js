import React from 'react';
import icon from "./../../asstest/img/icon.svg"
import ss from "./../../asstest/img/ss.svg"
import tr from "./../../asstest/img/tr.svg"
import map from "./../../asstest/img/map.svg"

const Advent = () => {
    return (
        <section id="advent">
            <div className="container">
                <div className="advent--general">
                    <div className="advent--general__block">
                        <img src={icon} alt="img"/>
                        <h1>Надёжная и бережная доставка</h1>
                    </div>
                    <h1 className="advent--general__title">Преи<span>мущес</span>тва</h1>
                    <div className="advent--general__block">
                        <img src={ss} alt="img"/>
                        <h1>Саблюдаем дорожные правила и этикет</h1>
                    </div>
                </div>
                <div className="advent--two">
                    <div className="advent--general__block">
                        <img src={tr} alt="img"/>
                        <h1>5 лет опыта работы</h1>
                    </div>
                    <div className="advent--general__block">
                        <img src={map} alt="img"/>
                        <h1>На месте когда и где нужно</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advent;