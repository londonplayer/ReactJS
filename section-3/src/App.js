import './App.css';
import MyComponent from "./components/MyComponent";
import { useState } from 'react';
import Title from './components/Title';

function App() {

  const [redTitle, setRedTitle] = useState();

  function handleButton() {
    if(redTitle === false) {
      setRedTitle(true)
    } else {
      setRedTitle(false)
    }
  }

  const timeOut = setTimeout(handleButton, 500)

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Esse é o parágrafo do App.js</p>
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      <Title />
    </div>
  );
}

export default App;
