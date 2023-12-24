// Write your code here.

import './index.css'

const Navbar = props => {
  const {topScore, isGameInProgress, currentScore} = props
  return (
    <nav className="bg1">
      <div className="g">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="ggg">Emoji Game</h1>
      </div>
      <div>
        {isGameInProgress && (
          <div className="hh">
            <p className="h">Score: {currentScore}</p>
            <p>Top Score:{topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
