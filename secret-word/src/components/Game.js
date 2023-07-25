import DialogBox from './DialogBox'
import './Game.css'
import {useState, useRef} from 'react'

const Game = ({
  checkLetter, 
  selectedWord, 
  selectedCategory,
  letters,
  guessedLetters,
  wrongLetters, 
  guesses, 
  score, 
}) => {

  const [letter, setLetter] = useState('')
  const letterInputRef = useRef(null)
   
  const handleSubmit = (e) => {
    e.preventDefault();
    checkLetter(letter)
    setLetter('')
    letterInputRef.current.focus();

  }


  return (
    <div>
      <h1>GUESS THE WORD</h1>
      <h3 className='tip'>
        Tip: <span>{selectedCategory}</span>
      </h3>
      <p>You still have {guesses} guesses</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className='letter'>{letter}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength='1'
            onChange={(e) => setLetter(e.target.value)} 
            value={letter}
            ref={letterInputRef}
          />
          <button>Play!</button>
        </form>
        <div className='info'>
          <DialogBox />
        </div>
      </div>
      <div className='score'>
        <p>Score: {score}</p>
      </div>
      <div>
        <p>Letras utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter} - </span>
        ))}
      </div>
    </div>
  )
}

export default Game