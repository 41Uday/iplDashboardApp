// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

const backGroundColorList = [
  {team: 'KKR', value: 'kkr-class'},
  {team: 'RCB', value: 'rcb-class'},
  {team: 'KXP', value: 'kxp-class'},
  {team: 'CSK', value: 'csk-class'},
  {team: 'RR', value: 'rr-class'},
  {team: 'MI', value: 'mi-class'},
  {team: 'SH', value: 'sh-class'},
  {team: 'DC', value: 'dc-class'},
]

const latestFreshMatches = []

class TeamMatches extends Component {
  state = {isLoading: true, teamImg: '', recentMatchesList: []}

  componentDidMount() {
    this.getMatchesList()
  }

  getMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const firstTransformData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const resImg = firstTransformData.teamBannerUrl
    const latestMatches = firstTransformData.latestMatchDetails
    const freshMatches = {
      competingTeam: latestMatches.competing_team,
      competingTeamLogo: latestMatches.competing_team_logo,
      date: latestMatches.date,
      firstInnings: latestMatches.first_innings,
      id: latestMatches.id,
      manOfTheMatch: latestMatches.man_of_the_match,
      result: latestMatches.result,
      secondInnings: latestMatches.second_innings,
      umpires: latestMatches.umpires,
      venue: latestMatches.venue,
    }
    const recentTeams = firstTransformData.recentMatches
    const updatedRecentTeams = recentTeams.map(e => ({
      competingTeamLogo: e.competing_team_logo,
      competingTeam: e.competing_team,
      result: e.result,
      id: e.id,
      matchStatus: e.match_status,
    }))
    this.setState({recentMatchesList: updatedRecentTeams})
    console.log(updatedRecentTeams)
    latestFreshMatches.push(freshMatches)
    this.setState({teamImg: resImg})
    this.setState({isLoading: false})
  }

  getClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const fRes = backGroundColorList.filter(e => e.team === id)
    return fRes[0].value
  }

  render() {
    const {isLoading, teamImg, recentMatchesList} = this.state
    const classResult = this.getClassName()
    return (
      <div className={classResult}>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="white" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={teamImg}
              alt="team banner"
              className="main-img-team-matches"
            />
            <p className="para-1-tm">Latest Matches</p>
            <LatestMatch
              key={latestFreshMatches[0].id}
              latestMatch={latestFreshMatches[0]}
            />
            <ul className="list-cont-tm">
              {recentMatchesList.map(e => (
                <MatchCard key={e.id} matchItem={e} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
