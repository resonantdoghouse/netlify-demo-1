import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('https://developerjokes.herokuapp.com/jokes').then((response) => {
      setJokes(response.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello, Netlify 👋</h1>
      <ul>
        {jokes.map((joke) => (
          <li>{joke.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
