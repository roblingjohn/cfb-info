import React, { Component } from "react";
import TeamTable from "../components/TeamTable";
import sec from "../assets/conferenceData/sec";

class ConferencePage extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }

  conferenceInfo = sec

  teams = sec.teams;

  eastDivisionTeams = this.teams.filter((team) =>
    team.current_division.includes("East")
  );

  westDivisionTeams = this.teams.filter((team) =>
    team.current_division.includes("West")
  );

  render() {
    return (
      <div>
        <h1>{this.conferenceInfo.full_name}</h1>
        {/* <table>
          <tr>
            <th>Team</th>
            <th>Location</th>
            <th>Colors</th>
            <th>Stadium</th>
          </tr>
          {this.teams.map((team_entry) => (
            <TeamTable team={team_entry} />
          ))}
        </table> */}

<h2>East Division</h2>
        <table>
          <tr>
            <th>Team</th>
            <th>Location</th>
            <th>Colors</th>
            <th>Stadium</th>
          </tr>
          {this.eastDivisionTeams.map((team_entry) => (
            <TeamTable team={team_entry} />
          ))}
        </table>
<h2>West Division</h2>
        <table>
          <tr>
            <th>Team</th>
            <th>Location</th>
            <th>Colors</th>
            <th>Stadium</th>
          </tr>
          {this.westDivisionTeams.map((team_entry) => (
            <TeamTable team={team_entry} />
          ))}
        </table>
      </div>
    );
  }
}

export default ConferencePage;
