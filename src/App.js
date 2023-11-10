import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(prevCount => Math.min(100, prevCount + 1));
  };

  const sub = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const mul = () => {
    setCount(prevCount => Math.min(100, prevCount * 2));
  };



  return (
    <div className="App">
      <div className='buttoncontainer'>
      <button id='add' onClick={add} className='button'>+1</button>
      <button id='sub' onClick={sub} className='button'>-1</button>
      <button id='mul' onClick={mul} className='button'>*2</button>
      </div>
      <div id='count' className='counter'>{count}</div>
      {/* <button id='reset' onClick={() => setCount(0)} className='button'>Reset</button> */}
    </div>
  );
}

export default App;
