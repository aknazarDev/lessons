import React from 'react';

const Header = () => {
    return (
        <section id="header">
            <div className="container">
                <div className="header--general">
                    <h1 className="header--general__logo">Портер<span>Такси</span></h1>
                    <nav className="header--general__navigation">

                        <a href="#">Тарифы</a>
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>

                        <div className="header--general__navigation--group">

                            <div className="header--general__navigation--group__block">
                                <div><i className="fab fa-telegram"/></div>
                                <div><i className="fab fa-whatsapp"/></div>
                                <a href="tel:0509-13-99-66">0509-13-99-66</a>
                            </div>

                            <div className="header--general__navigation--group__block">
                                <div><i className="fab fa-telegram"/></div>
                                <div><i className="fab fa-whatsapp"/></div>
                                <a href="tel:0509-13-99-66">0509-13-99-66</a>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Header;