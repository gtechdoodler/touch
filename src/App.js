import React, { useState, useEffect } from 'react';
import './App.css';
import perf from './components/Perf/Perf';
import event from './components/Events/Event';
import throttle from 'lodash.throttle';

perf();

function App() {

  console.log('Loading');

  const [touchMoveStatus, setTouchMoveStatus] = useState('');
  const [scrollStatus, setScrollStatus] = useState(null);

  useEffect(() => {
  }, [])

  event.on('touchmove', 'lazyloading', throttle((e) => {
    console.log('touchmove', e);
    setTouchMoveStatus('Moved!')
  }, 100));

  event.on('scroll', 'scrollingtest', throttle((e) => {
    console.log('scroll', e);
    setScrollStatus('Moved!')
  }, 100));

  return (
    <div className="App">
      <div className="App-container">
        <div>{touchMoveStatus}</div>
        <div>{scrollStatus}</div>
      </div>
    </div>
  );
}

export default App;
