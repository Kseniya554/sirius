import React from 'react';
import './MainUser.css';
import HeaderUser from '../HeaderUser/HeaderUser';
import Menu from '../Menu/Menu';
import InfoBlock from '../InfoBlock/InfoBlock';

const MainUser: React.FC = () => {
  return (
    <section className='main_user'>
      <HeaderUser />
      <Menu />
      <InfoBlock />
      
    </section>
  );
};

export default MainUser;
