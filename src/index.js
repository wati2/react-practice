import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';


const numbers = [1,2,3,4,5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
