import React from 'react';
import Slider from "react-slick";
import data from "./data";
import Data from "./data";

const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id="services">
            <div className="container">
                <div className="services--general__line"/>
                <p className="services--general__description">Грузовые перевозки по низкой цене осуществляются
                    в <br/> любое время дня и ночи. Организуем комфортный переезд <br/> или быструю доставку груза
                    по Бишкеку и Кыргызстану.</p>
                <div className="services--general">
                    <Slider {...settings}>
                        {
                            Data.map(el => {
                                return (

                                    <div key={el.id}>
                                        <div className="services--general__block">
                                            <img src={el.img} alt="img"/>
                                            <h1>{el.title}</h1>
                                            <p>{el.desc}</p>
                                            <h2>{el.price}</h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>

    );
};

export default Services;