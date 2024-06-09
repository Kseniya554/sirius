import React, { useState, useEffect, ChangeEvent } from 'react';
import chat from '../../images/Messages, Chat.svg';
import avatar from '../../images/avatar.svg';
import down from "../../images/Path.svg"
import './Header.css';

const Header: React.FC = () => {
    return (
        <section className='header'>
            <div className='header-block'>
                <button className='header-block__button'>
                  <img className='header-block__icon' src={chat} alt='иконка'/>
                  <p className='header-block__figure'>2</p>
                </button>
                <button className='header-block__button'>
                  <img className='header-block__icon header-block__icon_avatar' src={avatar} alt='иконка'/>
                  < img className='header-block__icon-down' src={down} alt='иконка'/>
                </button>
            </div>
        </section>
    )
}

export default Header;
