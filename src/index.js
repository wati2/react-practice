import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

function Contacts() {
  return <div className="Contacts" />
}

function Chat() {
  return <div className="Chat" />
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  )
}

function WelcomeDialog(){
  return (
    <Dialog
      title="Welcome"
      message="Thank you------------"/>
  )
}

function SPlitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SPlitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SPlitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  )
}



ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
