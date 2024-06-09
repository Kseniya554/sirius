import React from 'react';
import './InfoBlock.css';
import dog from '../../images/SF_2 1.svg';
import icon from '../../images/User,Profile.svg'

const InfoBlock: React.FC = () => {
  return (
    <section className='info-block'>
      <div className='action'>
        <p className='action__title'>До 31 декабря любой курс со скидкой 20%</p>
        <p className='action__subtitle'>
          До конца года у вас есть уникальная возможность воспользоваться нашей
          новогодней скидкой 20% на любой курс!
        </p>
        <img className='action__img' src={dog} alt='картинка' />
      </div>
      <div className='time'>
        <p className='time__title'>Следующее занятие начнется через:</p>
        <div className='time__info'>
          <div className='time__block'>
            <p className='time__number'>6</p>
            <p className='time__text'>д</p>
          </div>
          <div className='time__block'>
            <p className='time__number'>12</p>
            <p className='time__text'>ч</p>
          </div>
          <div className='time__block'>
            <p className='time__number'>24</p>
            <p className='time__text'>мин</p>
          </div>
        </div>
        <button className='time__button'>Button</button>
      </div>
      <div className='dop'></div>
      <div className='balance'>
        <p className='balance__title'>Баланс занятий</p>
        <div className='balance__info-block'>
          <div className='balance_block'>
            <p className='balance__text'>Ментальная Арифметика</p>
            <p className='balance__number'>32</p>
          </div>
          <div className='balance_block'>
            <p className='balance__text'>Программирование</p>
            <p className='balance__number'>0</p>
          </div>
          <div className='balance_block'>
            <p className='balance__text'>Скорочтение</p>
            <p className='balance__number'>4</p>
          </div>
          <div className='balance_block'>
            <p className='balance__text'>Ментальная Арифметика</p>
            <p className='balance__number'>32</p>
          </div>
          <div className='balance_block'>
            <p className='balance__text'>Программирование</p>
            <p className='balance__number'>0</p>
          </div>
          <div className='balance_block'>
            <p className='balance__text'>Скорочтение</p>
            <p className='balance__number'>4</p>
          </div>
        </div>
        <button className='balance__button'>Button</button>
      </div>
      <div className='schedule'>
        <p className='schedule__title'>Ближайшие уроки</p>
        <div className='schedule__rows'>
          <div className='schedule__rows-date'>
            <p className='schedule__rows-number'>1</p>
            <p className='schedule__rows-month'>мая</p>
          </div>
          <p className='schedule__rows-lesson'>Ментальная Арифметика</p>
          <p className='schedule__rows-time'>14:00-14:25</p>
          <div className='schedule__rows-teacher'>
            <img className='schedule__rows-teacher-icon' src={icon} alt='иконка' />
            <p className='schedule__rows-teacher-name'>Белкина Инна</p>
          </div>
          <div className='schedule__rows-buttons'>
            <button className='schedule__rows-left-button button-border'>Button</button>
            <button className='schedule__rows-right-button'>Button</button>
          </div>
        </div>
        <div className='schedule__rows'>
          <div className='schedule__rows-date'>
            <p className='schedule__rows-number'>30</p>
            <p className='schedule__rows-month'>октября</p>
          </div>
          <p className='schedule__rows-lesson'>Программирование</p>
          <p className='schedule__rows-time'>11:00-11:11</p>
          <div className='schedule__rows-teacher'>
            <img className='schedule__rows-teacher-icon' src={icon} alt='иконка' />
            <p className='schedule__rows-teacher-name'>Животновская Оксана</p>
          </div>
          <div className='schedule__rows-buttons'>
            <button className='schedule__rows-left-button '>Button</button>
            <button className='schedule__rows-right-button'>Button</button>
          </div>
        </div>
        <div className='schedule__rows schedule__rows-border'>
          <div className='schedule__rows-date'>
            <p className='schedule__rows-number'>16</p>
            <p className='schedule__rows-month'>ноября</p>
          </div>
          <p className='schedule__rows-lesson'>Скорочтение</p>
          <p className='schedule__rows-time'>09:00-09:45</p>
          <div className='schedule__rows-teacher'>
            <img className='schedule__rows-teacher-icon' src={icon} alt='иконка' />
            <p className='schedule__rows-teacher-name'>Мин Елена</p>
          </div>
          <div className='schedule__rows-buttons'>
            <button className='schedule__rows-left-button'>Button</button>
            <button className='schedule__rows-right-button'>Button</button>
          </div>
        </div>
        <button className='schedule__button'>Button</button> 
      </div>
    </section>
  );
};

export default InfoBlock;
