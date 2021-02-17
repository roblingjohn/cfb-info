import React, { Component } from "react";
import sec from "../assets/conferenceData/sec";

class TeamPage extends Component {
  state = {};

  teamData = {};

  componentDidMount() {
    this.teamData = sec.teams.find((team) => team.search_name === this.props.match.params.teamName);
    this.setState(this.teamData);
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.school} {this.state.nickname}
        </h1>
      </div>
    );
  }
}

export default TeamPage;
