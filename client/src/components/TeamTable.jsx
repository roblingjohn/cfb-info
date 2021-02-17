import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeamTable extends Component {
  teamInfo = this.props.team;

  render() {
    return (
      <tr
        style={{
          backgroundColor: this.teamInfo.colors[0].hex,
          color: this.teamInfo.colors[1].hex,
        }}
      >
        <td>
          <Link
            style={{
              color: this.teamInfo.colors[1].hex,
            }}
            to={`/team/${this.teamInfo.search_name}`}
          >
            {this.teamInfo.school} {this.teamInfo.nickname}
          </Link>
        </td>
        <td>
          {this.teamInfo.city}, {this.teamInfo.state}
        </td>
        <td>
          {this.teamInfo.colors[0].color_name} and{" "}
          {this.teamInfo.colors[1].color_name}
        </td>
        <td>{this.teamInfo.current_home_stadium}</td>
      </tr>
    );
  }
}

export default TeamTable;
