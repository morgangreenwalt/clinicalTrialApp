var axios = require("axios");

var helpers = {

// Helper examples below 
// ==================================================================
  newTicket: function(inquiry, name, email) {
      return axios.get("http://localhost:3000/api/zendesk/newTicket/"+inquiry+"/"+name+"/"+email);    
      // return axios.get("/api/zendesk/newTicket/"+inquiry+"/"+name+"/"+email);
  }, 
  getAllFAQ: function() {
    return axios.get("http://localhost:3000/api/faq");    
    // return axios.get("/api/faq");
  },
  getAllFAQWithCategory: function() {
    return axios.get("/api/faq/:category",{Category: "Protocol"});
  },
  getAllData: function() {
        return axios.get("/data");
    },

  watchingData: function() {
      return axios.get("/watching", { watch: "true" });
  },

  resetData: function() {
        return axios.post("/reset");
    },

  postData: function(query) {
    return axios.post("/api", { query: query });
  },

  saveData: function(id) {
    return axios.post("/save", {id: id})
  },

  clearData: function() {
    return axios.post("/clear");
  },

  unsaveData: function(id) {
    return axios.post("/unsave", {id: id})
  },

  postNote: function(id, note) {
    return axios.post("/notes", {id: id, note: note})
  },

  deleteNote: function(id) {
    return axios.post("/delete/note", {id: id})
  }

};

module.exports = helpers;