import React, { useState, ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Main from '../Main/Main';
import MainUser from '../MainUser/MainUser'
import { CurrentUserContext, User } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/signin' element={<Login isLoading={false} />} />
          <Route path='/' element={<Main />} />
          <Route path='/user' element={<MainUser />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
