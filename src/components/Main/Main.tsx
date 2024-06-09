import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu'
import Calendar from '../Calendar/Calendar'

const Main: React.FC = () => {
    return (
        <section className='main'>
            <Header />
            <Menu />
            <Calendar />
        </section>
    )
}

export default Main;