import React, { useState } from 'react';
import chat from '../../images/Messages, Chat.svg';
import avatar from '../../images/avatar.svg';
import anna from '../../images/avatar-2.svg' 
import down from '../../images/Path.svg';
import exit from '../../images/exit.svg';
import './HeaderUser.css';

const DropdownMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className='dropdown-menu'>
      <div className='dropdown-menu__header'>
        <p className='dropdown-menu__header-text'>Смена пользователя</p>
        <button className='dropdown-menu__close-button' onClick={onClose}>
          x
        </button>
      </div>
      <ul className='dropdown-menu__list'>
        <li className='dropdown-menu__item dropdown-menu__item_active '>
          <img className='dropdown-menu__avatar' src={avatar} alt='иконка' />
          <div className='dropdown-menu__info-block'>
            <p className='dropdown-menu__text'>Михаил</p>
            <p className='dropdown-menu__info'>Это вы</p>
          </div>
        </li>
        <li className='dropdown-menu__item'>
          <img className='dropdown-menu__avatar' src={anna} alt='иконка' />
          <p className='dropdown-menu__text'>Анна</p>
        </li>
      </ul>
      <button className='dropdown-menu__button'>
        <p className='dropdown-menu__button-text'>Выход</p>
        <img className='dropdown-menu__button-img' src={exit} alt='иконка'/>
      </button>
    </div>
  );
};

const HeaderUser: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleDropdownClose = () => {
    setIsDropdownVisible(false);
  };

  return (
    <section className='header_user'>
      <div className='header_user-block'>
        <div className='header_user-block__hello'>
          <p className='header_user-block__text'>Добро пожаловать,&emsp;</p>
          <p className='header_user-block__name'> Михаил!</p>
        </div>
        <div className='header_user-block__button-block'>
          <button className='header_user-block__button'>
            <img className='header_user-block__icon' src={chat} alt='иконка' />
            <p className='header_user-block__figure'>2</p>
          </button>
          <button
            className='header_user-block__button'
            onClick={handleDropdownToggle}
          >
            <img
              className='header_user-block__icon header_user-block__icon_avatar'
              src={avatar}
              alt='иконка'
            />
            <img
              className='header_user-block__icon-down'
              src={down}
              alt='иконка'
            />
          </button>
        </div>
        {isDropdownVisible && <DropdownMenu onClose={handleDropdownClose} />}
      </div>
    </section>
  );
};

export default HeaderUser;
