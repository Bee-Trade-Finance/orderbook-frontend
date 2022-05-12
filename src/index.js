import React from 'react';
import ReactDOM from 'react-dom';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/ionicons.min.css';
import './assets/scss/style.scss';

function getLibrary(provider) {
  let library = new Web3Provider(provider);
  // library.pollingInterval = 8000;
  return library;
}

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 7000,
  // you can also just use 'scale'
  transition: transitions.SCALE,
  containerStyle: {
    outerWidth: '900px'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
