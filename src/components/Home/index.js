// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getFirstTeamsList()
  }

  getFirstTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const objectToArray = data.teams

    const updatedData = objectToArray.map(e => ({
      id: e.id,
      name: e.name,
      teamImageUrl: e.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, teamsList} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div className="loader-cont">
            <Loader type="TailSpin" color="white" height={50} width={50} />
          </div>
        ) : (
          <div className="card-1">
            <div className="team-card-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="img-tc"
              />
              <h1 className="ipl-head">IPL Dashboard</h1>
            </div>
            <ul className="un-order-list-container">
              {teamsList.map(e => (
                <TeamCard key={e.id} teamsItems={e} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
