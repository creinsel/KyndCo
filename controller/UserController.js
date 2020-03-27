const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.UserInfo.find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.UserInfo.find({ email: req.body.email }).then(dbModel => {
      if (dbModel.length > 0) {
        bcrypt.compare(req.body.password, dbModel[0].password).then(result => {
          if (result) {
            const response = { ...dbModel[0]._doc };
            delete response.password;
            console.log("response", response);
            res.status(200).send(response);
          } else {
            res.status(404).send({ message: "Invalid log in" }) 
          }
        });
      } else {
        res.send(404, { message: "User not found" });
      }
    });
  },
  findById: function(req, res) {
    db.UserInfo.findById(req.params.id)
      .populate("act")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.UserInfo.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.UserInfo.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  performAct: function(req, res) {
    db.UserInfo.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { act: db.UserInfo.act } },
      { new: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.UserInfo.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
