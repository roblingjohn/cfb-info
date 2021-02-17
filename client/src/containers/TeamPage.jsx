import React, { Component } from "react";
import sec from "../assets/conferenceData/sec";

class TeamPage extends Component {
  state = { teamData: {} };

  teamData = {};

  componentDidMount() {
    this.teamData = sec.teams.find(
      (team) => team.search_name === this.props.match.params.teamName
    );
    this.setState({ teamData: this.teamData });
  }

  render() {
    if (!this.state.teamData.colors) {
      return <span>Loading...</span>;
    }
    return (
      <div
        style={{
          backgroundColor: this.teamData.colors[0].hex,
          color: this.teamData.colors[1].hex,
        }}
      >
        <h1>
          {this.state.teamData.school} {this.state.teamData.nickname}
        </h1>
        <ul>
          <li>
            Location: {this.state.teamData.city}, {this.state.teamData.state}
          </li>
          <li>
            Colors: {this.state.teamData.colors[0].color_name} and{" "}
            {this.state.teamData.colors[1].color_name}
          </li>
          <li>Stadium: {this.state.teamData.current_home_stadium}</li>
        </ul>
      </div>
    );
  }
}

export default TeamPage;
