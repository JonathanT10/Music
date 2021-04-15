import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';




const jsxElement = <h1><App /></h1>;
console.log(jsxElement);


ReactDOM.render(jsxElement, document.getElementById('root'));

