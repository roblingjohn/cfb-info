import React, { Component } from "react";

class TeamTable extends Component {
  teamInfo = this.props.team;

  render() {
    return (
      <tr>
        <td>
          {this.teamInfo.school} {this.teamInfo.nickname}
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
