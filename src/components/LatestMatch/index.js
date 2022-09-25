// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="latest-bg-container">
      <div className="card-1-lm">
        <p className="head-lm">{competingTeam}</p>
        <p className="par-1-lm-card-1">{date}</p>
        <p className="par-2-lm-card-1">{venue}</p>
        <p className="par-3-lm-card-1">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="lm-img"
      />
      <div className="card-2-lm">
        <p className="first-innings">First Innings</p>
        <p className="par-3-lm-card-1">{firstInnings}</p>
        <p className="first-innings">Second Innings</p>
        <p className="par-3-lm-card-1">{secondInnings}</p>
        <p className="first-innings">Man Of The Match</p>
        <p className="par-3-lm-card-1">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="par-3-lm-card-1">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
