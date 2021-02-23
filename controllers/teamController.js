const db = require("../models");
const moment = require("moment-timezone");

module.exports = {
  findAll: function (req, res) {
    db.Team.find(req.query)
      .then((dbTeams) => {
        res.json(dbTeams);
      })
      .catch((err) => res.status(422).json(err));
  },
  findBySearchName: function (req, res) {
    db.Team.findOne({ search_name: req.params.team })
      .then((dbTeams) => res.json(dbTeams))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Team.findById(req.params.id)
      .then((dbTeams) => res.json(dbTeams))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Team.create(req.body)
      .then((dbTeams) => res.json(dbTeams))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Team.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbTeams) => res.json(dbTeams))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Team.findById({ _id: req.params.id })
      .then((dbTeams) => dbTeams.remove())
      .then((dbTeams) => res.json(dbTeams))

      .catch((err) => res.status(422).json(err));
  },
};
