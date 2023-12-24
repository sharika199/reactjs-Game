// Write your code here.

import './index.css'

const WinOrLossCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const gameState = isWon ? 'You Won' : 'You Lose'
  const scoreCard = isWon ? 'Best Score' : 'Score'

  return (
    <div className="gr">
      <div className="hj">
        <h1>{gameState}</h1>
        <div>
          <p>{scoreCard}</p>
          <p>
            <span>{score}/12 </span>
          </p>

          <button type="button" onClick={onClickPlayAgain}>
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
