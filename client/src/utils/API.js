import axios from "axios";


export default {
  //API calls to db kindActs
  //Get all kindacts
  getKindActs: function() {
    return axios.get("/api/kindacts");
  },
  // get kind act with given id
  getKindAct: function(id) {
    return axios.get("/api/kindacts/" + id);
  },
  //delete kind acts
  deleteKindAct: function(id) {
    return axios.delete("/api/kindacts/" + id);
  },
  //save a new act
  saveAct: function(actData) {
    return axios.post("/api/kindacts", actData);
  },
  //update an act
  updateAct: function(id, actData) {
    return axios.put("/api/kindacts/" + id, actData);
  },

  //API calls to db Users

  saveUser: function(formdata) {
    return axios.post("/api/users/", formdata );
   
  },
  //gets user by id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  //updates user by id
  updateUser: function(id) {
    return axios.put("/api/users/" + id);
  }
};
