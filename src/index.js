import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: '김',
  lastName: '소윤'
};

// 어트리뷰트에 Javascript 표현식을 삽입할 때 중괄호 주변에 따옴표를 입력하지 마세요. 따옴표 또는 중괄호중 하나만 사용하고, 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안됩니다.

const element = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
