import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';


function ListItem(props){
  return <li>{props.value}</li>
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number)=>
      <ListItem key={number.toString()} value={number} /> )}
    </ul>
  );
}

const numbers = [1,2,3,4,5];

ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
