// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  getColor = () => {
    const {matchItem} = this.props
    const {matchStatus} = matchItem
    if (matchStatus === 'Won') {
      return 'green-col'
    }
    return 'red-col'
  }

  render() {
    const {matchItem} = this.props
    const {competingTeamLogo, competingTeam, result, matchStatus} = matchItem
    return (
      <li className="list-item-mc">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="img-tc-1"
        />
        <p className="head-tc">{competingTeam}</p>
        <p className="para-tc">{result}</p>
        <p className={this.getColor()}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
