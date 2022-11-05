import React from 'react';

const Contact = () => {
    return (<section id="contact">
            <div className="container">
                <div className="contact--general">
                    <div className="contact--general__title">

                        <h1>Услуги портер такси и грузчиков в Бишкеке - мы любим и гордимся своей работой и сделаем все
                            <br/> возможное, чтобы наши услуги грузоперевозок были максимально качественными и быстрыми.
                        </h1>
                        <h1>Мы всегда будем рады видеть Вас среди наших постоянных Гостей!</h1>
                        <h1>У нас разработаны выгодные тарифы, которые позволят недорого заказать Портер Такси для
                            <br/>перевозки мебели, техники, вещей, строительных материалов, а также перевезти
                            крупногабаритный <br/> и тяжелый груз.</h1>

                        <h2>Кон<span>такты</span></h2>

                        <div className="contact--general__title--p">
                            <p>0555-07-12-39</p>
                            <p>0704-72-28-62</p>
                        </div>

                        <h2>Напи<span>сать</span></h2>

                        <div className="contact--general__title--i">
                            <div className="contact--general__title--i__tel"><i className="fab fa-telegram"/></div>
                            <div className="contact--general__title--i__wha"><i className="fab fa-whatsapp"/></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>);
};

export default Contact;