import React, { Component } from "react";
import TeamTable from "../components/TeamTable";
import sec from "../assets/conferenceData/sec";

class ConferencePage extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }

  teams = sec;

  render() {
    return (
      <div>
        <h1>{this.props.match.params.conference}</h1>
        <table>
          <tr>
            <th>Team</th>
            <th>Location</th>
            <th>Colors</th>
            <th>Stadium</th>
          </tr>
          {this.teams.map((team_entry) => (
            <TeamTable team={team_entry} />
          ))}
        </table>
      </div>
    );
  }
}

export default ConferencePage;
