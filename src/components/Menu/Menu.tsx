import React, { useState } from 'react';
import logo from '../../images/Logomark_1_.svg';
import text from '../../images/Group-text.svg';
import main from '../../images/icon-main.svg';
import calendar from '../../images/calendar.svg';
import pay from '../../images/Pay.svg';
import win from '../../images/win.svg';
import trainer from '../../images/trainer.svg';
import library from '../../images/library.svg';
import help from '../../images/help.svg';
import setting from '../../images/setting.svg';
import questions from '../../images/questions.svg';
import free from '../../images/gift illustration.svg';
import './Menu.css';

const Menu: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>('Расписание');

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <section className='menu'>
      <div className='menu__header'>
        <img className='menu__header-logo' src={logo} alt='логотип' />
        <img className='menu__header-img' src={text} alt='логотип' />
      </div>
      <nav className='menu__nav'>
        <button
          className={`menu__nav-button ${
            activeButton === 'Главная' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Главная')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Главная' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={main}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Главная' ? 'menu__nav-text_active' : ''
            }`}
          >
            Главная
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Расписание' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Расписание')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Расписание' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={calendar}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Расписание' ? 'menu__nav-text_active' : ''
            }`}
          >
            Расписание
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Оплата' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Оплата')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Оплата' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={pay}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Оплата' ? 'menu__nav-text_active' : ''
            }`}
          >
            Оплата
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Достижения' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Достижения')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Достижения' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={win}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Достижения' ? 'menu__nav-text_active' : ''
            }`}
          >
            Достижения
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Тренажеры' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Тренажеры')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Тренажеры' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={trainer}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Тренажеры' ? 'menu__nav-text_active' : ''
            }`}
          >
            Тренажеры
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Библиотека' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Библиотека')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Библиотека' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={library}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Библиотека' ? 'menu__nav-text_active' : ''
            }`}
          >
            Библиотека
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Проверка связи' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Проверка связи')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Проверка связи' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={help}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Проверка связи' ? 'menu__nav-text_active' : ''
            }`}
          >
            Проверка связи
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Настройки' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Настройки')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Настройки' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={setting}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Настройки' ? 'menu__nav-text_active' : ''
            }`}
          >
            Настройки
          </p>
        </button>
        <button
          className={`menu__nav-button ${
            activeButton === 'Вопросы' ? 'menu__nav-button_active' : ''
          }`}
          onClick={() => handleButtonClick('Вопросы')}
        >
          <img
            className={`menu__nav-icon ${
              activeButton === 'Вопросы' ? 'menu__nav-icon_active' : ''
            }`}
            alt='иконка'
            src={questions}
          />
          <p
            className={`menu__nav-text ${
              activeButton === 'Вопросы' ? 'menu__nav-text_active' : ''
            }`}
          >
            Вопросы
          </p>
        </button>
      </nav>
      <div className='menu__free'>
        <p className='menu__free-title'>Учитесь бесплатно</p>
        <p className='menu__free-subtitle'>
          Приводите друзей с детьми заниматься в Sirius Future и получайте
          подарки!
        </p>
        <button className='menu__free-button'>Узнать</button>
        <img className='menu__free-img' src={free} alt='подарок' />
      </div>
    </section>
  );
};

export default Menu;
