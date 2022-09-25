// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamsItems} = props
  const {id, name, teamImageUrl} = teamsItems

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="list-img" />
        <p className="list-head">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
