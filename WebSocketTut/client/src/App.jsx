import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

import Input from './components/input';

function App() {
  const [score, setScores] = useState({});

  const [scores, setAllScores] = useState([]);

  const socket = io('http://localhost:3000');
  function connectSocket(){
    socket.on('connection', (socket)=>{
      console.log(socket);


    });
    socket.on('connect_error', (err) => {
      console.error('Connection failed:', err.message);
  });
  
    }
  function handleInput(event){
    let { name, value } = event.target;
    let currentObj = {[name]: value};

    setScores((prev) => ({...prev, ...currentObj}));

    
  }

  function sendScores(){

    socket.emit('scores', score);
    socket.on('playerScores', (playerScores) => {
      setAllScores(playerScores);
  });
}

  useEffect(() => {
    connectSocket();
  });

  return (
    <>
      
      <h1>React Multi Player Dashboard</h1>
      <Input 
        name ='name' 
        placeholder='Enter your name'  
        handleInput={ handleInput }
      />

      <Input 
        name = 'score' 
        placeholder='Enter your score' 
        handleInput = { handleInput }
      />
      <button 
        className='send-score' 
        onClick={sendScores}>Publish Score
      </button>

      {scores.length > 0 ? <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Score</th>
    
          </tr>

          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score?.score}</td>
    
            </tr>
          ))}
        </tbody>
  
  
  
  
        </table> : <></>}


      
    </>
  )
}

export default App
