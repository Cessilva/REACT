import React from 'react';
import ReactDOM from 'react-dom';
//Importamos react y react DOM, ambas importantes, la primera;la biblioteca, que nos permite crear las interfaces, la segunda; 
//React enfocada al navegador,esto para una aplicacion WEB, en caso que querer desarrollar para moviles se agregaran adicionales

import './index.css';
//Podemos importar archivos css
import App from './App';
//El archivo en el que nos encontramos es el que ayuda a arrancar la aplicacion, indica que la aplicacion se encuentra en App.js
import reportWebVitals from './reportWebVitals';
//Para las aplicaciones que tratan de simular datos de manera local 
//Se guardan los archivos de manera temporal en la memoria local de tu aplicacon (Progresive Web App)

//Ayuda a renderizar la intefaz en pantalla , renderiza la aplicacion que escribimos (JSX)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
