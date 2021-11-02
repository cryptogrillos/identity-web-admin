const getPatientbyId = function(state) {
  console.log("Started getPatientbyId()");
  return id => {
    var result = state.patients.filter(p => p.id == id);
    return result.length > 0 ? result[0] : null;
  };
};

export default {
  getPatientbyId
};
