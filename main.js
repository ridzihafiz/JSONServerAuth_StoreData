// https://stackblitz.com/edit/vitejs-vite-bbacee?file=main.js,src%2Fpages%2FDataSiswa.js

import DataSiswa from './src/pages/DataSiswa';
import Home from './src/pages/Home';
import './style.css';

const app = document.getElementById('app');
const page = document.location.pathname;

switch (page) {
  case '/':
    app.innerHTML = Home();
    break;

  case '/datasiswa':
    DataSiswa();
    break;

  default:
    app.innerHTML = `<h1>Page Not Found - Error 404</h1>`;
    break;
}
