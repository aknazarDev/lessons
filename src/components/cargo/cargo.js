import React from 'react';


const Cargo = () => {
    return (
        <section id="cargo">
            <div className="container">
                <div className="cargo--general">
                    <div className="cargo--general__block">

                        <h1 className="cargo--general__block--title">Есть груз<span>прямо сейчас?</span></h1>

                        <p className="cargo--general__block--field">Заполните все обязательные поля</p>

                        <h2 className="cargo--general__block--name">Ф.И.О.<span>*</span></h2>

                        <hr className="cargo--general__block--hr"/>

                        <h2 className="cargo--general__block--name">Номер вашего телефона<span>*</span></h2>

                        <hr className="cargo--general__block--hr"/>

                        <p className="cargo--general__block--p">Выберите<span>подходящие</span>услуги:<span>*</span></p>

                        <div className="cargo--general__block--inputs">
                            <div className="cargo--general__block--inputs__div">
                                <input type="radio" className="cargo--general__block--inputs__div--radi"/>
                                <h3>Портер</h3>
                            </div>
                            <div className="cargo--general__block--inputs__div">
                                <input type="radio" className="cargo--general__block--inputs__div--radi"/>
                                <h3>Грузчики</h3>
                            </div>
                            <div className="cargo--general__block--inputs__div">
                                <input type="radio" className="cargo--general__block--inputs__div--radi"/>
                                <h3>Разборка/сборка мебели</h3>
                            </div>
                            <div className="cargo--general__block--inputs__div">
                                <input type="radio" className="cargo--general__block--inputs__div--radi"/>
                                <h3>Вывоз мусора</h3>
                            </div>
                        </div>

                        <textarea  placeholder="Комментарии к заказу (необязательно)" className="cargo--general__block--text"></textarea>

                        <button className="cargo--general__block--btn">Заказать</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cargo;