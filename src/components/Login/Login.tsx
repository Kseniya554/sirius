import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import logo from '../../images/Logomark_1_.svg';
import useValidation from '../../utils/Validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { RootState } from '../../store/store';
import './Login.css';

interface LoginProps {
  isLoading: boolean;
}

const Login: React.FC<LoginProps> = ({ isLoading }) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const { errors, values, isValid, handleChange, resetValidation } =
    useValidation();
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.auth.email);

  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  useEffect(() => {
    const remembered = localStorage.getItem('rememberMe') === 'true';
    const rememberedEmail = remembered
      ? localStorage.getItem('email') || ''
      : '';
    setRememberMe(remembered);
    if (rememberedEmail) {
      handleChange({
        target: { name: 'email', value: rememberedEmail },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [handleChange]);

  function handlePasswordVisibility() {
    setPasswordVisible(!passwordVisible);
  }

  const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRememberMe(e.target.checked);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(login(values.email));
    if (rememberMe) {
      localStorage.setItem('rememberMe', 'true');
      localStorage.setItem('email', values.email);
    } else {
      localStorage.removeItem('rememberMe');
      localStorage.removeItem('email');
    }
  }

  return (
    <div className='login'>
      <div className='login__header'>
        <Link to='/'>
          <img className='login__logo rotation' src={logo} alt='логотип' />
        </Link>
      </div>
      <h2 className='login__title'>Вход в Sirius Future</h2>
      <form className='login__form' onSubmit={handleSubmit} noValidate>
        {isLoading && <Preloader />}
        <label className='login__label'>
          <input
            className='login__input'
            name='email'
            id='email'
            type='email'
            placeholder='E-mail'
            required
            value={values.email || ''}
            onChange={handleChange}
            pattern='^[A-Za-z0-9_.+\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-.]+$'
          />
          <span
            className={`login__input-error ${
              !isValid && errors.email ? 'login__input-error_active' : ''
            }`}
          >
            {errors.email || ''}
          </span>
        </label>
        <label className='login__label'>
          <div className='login__password-wrapper'>
            <input
              className='login__input'
              name='password'
              id='password'
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Пароль'
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              className='login__password-icon'
              onClick={handlePasswordVisibility}
            />
          </div>
          <span
            className={`login__input-error ${
              !isValid && errors.password ? 'login__input-error_active' : ''
            }`}
          >
            {errors.password || ''}
          </span>
        </label>
        <label className='login__checbox'>
          <input
            className='login__checbox-input'
            type='checkbox'
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <p className='login__checbox-text'>Запомнить меня</p>
        </label>
        <button
          className={`login__button ${
            !isValid && errors ? 'login__button_disabled' : ''
          }`}
          type='submit'
          disabled={!isValid}
        >
          Войти
        </button>
        <div className='login__register'>
          <Link className='login__register-link' to='/signup-forgot'>
            Я забыл пароль
          </Link>
          <Link className='login__register-link' to='/signup-coach'>
            Войти как тренер
          </Link>
        </div>
      </form>
      <div className='login__footer'>
        <p className='login__register-text'>Нет аккаунта?</p>
        <Link className='login__register-link' to='/signup'>
          Зарегистрироваться
        </Link>
      </div>
      <div className='login__translate'>
        <button className='login__translate-button login__translate-button_active'>
          RU
        </button>
        <button className='login__translate-button'>EN</button>
      </div>
    </div>
  );
};

export default Login;
