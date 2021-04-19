import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/app';
import './index.css'




const jsxElement = <h1 className="main"><App /></h1>;
console.log(jsxElement);


ReactDOM.render(jsxElement, document.getElementById('root'));

