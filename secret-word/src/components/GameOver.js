import './GameOver.css'

const GameOver = ({reset, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Your score: {score}</h2>
      <button onClick={reset}>Restart Game</button>
    </div>
  )
}

export default GameOver