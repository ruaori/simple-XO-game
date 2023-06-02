import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './Views/Home/Board'

function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const list = [];

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleJob = (e) => {
    setJob(e.target.value);
  }

  const submitAdd = (e) => {

    if (name == '' || job == '') {
      window.alert("add failed");
    }
    else {
      window.alert(name + " " + job);
      console.log(name + " " + job);
    }
    e.preventDefault();
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='input-form'>
        <div className='name-todo'>
          <p>Name: </p>
          <input type='text' placeholder='input to-do name' onChange={handleName} />
        </div>
        <div className='name-todo'>
          <p>Job: </p>
          <input type='text' placeholder='input to-do job' onChange={handleJob} />
        </div>
        <div className="card">
          <button onClick={submitAdd}>
            Add
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Board />
    </>
  )
}

export default App;