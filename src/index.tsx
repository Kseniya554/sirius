import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // добавлено
import store from './store/store'; // путь к вашему файлу с хранилищем Redux
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}> {/* обернуть корневой компонент в Provider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
