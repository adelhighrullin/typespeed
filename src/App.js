import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);
  const [timer, setTimer] = useState(0);
  const [typingMode, setTypingMode] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);

  const wordList = ['hello', 'forest', 'summer', 'laptop', 'snow']

  const handleTyping = (e) => {
    setInput(e.target.value.trim());
    if (!typingMode) {
      setTypingMode(true);
    }
  }

  const handleSpecialKey = (e) => {
    if (e.keyCode === 32) {
      setWords(arr => [...arr, e.target.value])
      setInput("");
    }
    if (e.keyCode === 27) {
      console.log(timer);
      setTypingMode(false);
      setWords([]);
      setInput("");
    }
  }

  useEffect(() => {
    if (typingMode) {
      setTimeout(() => setTimer(timer + 1), 1000)
    }
    else {
      clearInterval();
      setTimer(0);
    }
  });

  return (
    <div className="App">
      <h1>typespeed</h1>
      <textarea value={wordList} readOnly={true}/>
      <input value={input} onChange={handleTyping} onKeyDown={handleSpecialKey} />
      <textarea value={input} readOnly={true} />
      <textarea value={words} readOnly={true} />
      <textarea value={timer} readOnly={true} />
    </div>
  );
}

export default App;