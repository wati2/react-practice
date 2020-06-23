import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


// 생성자의 존재이유 = 초기값 설정
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }

  // 메서드는 컴포넌트 풀력물이 DOM에 렌더링 된 후에 실행됩니다.
  // 이 장소가 타이머를 설정하기에 좋은 장소입니다.
  componentDidMount() {
    // 컴포넌트 풀력물이 DOM에 렌더링 된 후에 실행됩니다. 이 장소가 타이머를 설정하기에 좋은 장소입니다.
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
