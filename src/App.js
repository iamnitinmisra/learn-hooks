import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [count, setStudent] = useState(6);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setStudent(count + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
