import { useCallback, useEffect, useState } from "react";

// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import test from "./data/test.json"

// styles
import "./App.css";

// data
import { wordsList } from "./data/words";
import DialogBox from "./components/DialogBox";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {

  const [words] = useState(wordsList)
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [selectedWord, setSelectedWord] = useState('')
  const [selectedCategory, setSelectedCategoty] = useState('')
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const selectWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // console.log(category);
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }

  const startGame = useCallback(() => {
    const {word, category} = selectWordAndCategory();
    // console.log(word, category);
    
    let wordLetter = word.split("");
    wordLetter = wordLetter.map((l) => l.toLowerCase())
    // console.log(wordLetter);

    setSelectedWord(word);
    setSelectedCategoty(category);
    setLetters(wordLetter);
    setGameStage(stages[1].name);
  });

  const checkLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();
    // setGameStage(stages[2].name)

    if (
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    if (
      letters.includes(normalizedLetter)
    ) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  const reset = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name)
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if(guesses <= 0) {

      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if(guessedLetters.lenght === uniqueLetters.length) {
      setScore((actualScore) => actualScore += 100)
      startGame();
    }

  }, [guessedLetters, letters, startGame])

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game checkLetter={checkLetter} 
      selectedWord={selectedWord}
      selectedCategory={selectedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}/>}
      {gameStage === "end" && <GameOver reset={reset} score={score}/>}
    </div>
  );
}

export default App;
