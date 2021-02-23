import axios from "axios";

export default {
  getAllTeams: function (data) {
    return axios.get("/api/teams");
  },
  getOneEvent: function (id) {
    return axios.get("/api/events/" + id);
  },
  getThisWeek: function(data){
    return axios.get("api/events/thisweek")
  }
};
