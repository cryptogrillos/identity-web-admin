import router from "@/routes/index";

const updateJWT = (state, newJWT) => {
  console.log("commit updateJWT");
  localStorage.setItem("jwt", newJWT);
  state.jwt = newJWT;
  state.loggedIn = true;
};

const updateLogin = (state) => {
  console.log("commit login")
  state.loggedIn = true;
}

const updateLogout = (state) => {
  console.log("commit logout")
  state.loggedIn = false;
}

const loadJWT = state => {
  console.log("commit loadJWT");
  let newJWT = localStorage.getItem("jwt");
  if (newJWT != null) {
    state.jwt = newJWT;
    state.loggedIn = true;
    router.push({ name: "Dashboard" }).catch(e => {
      console.log(e);
    });
  }
};

const updateEphemeral = (state, newToken) => {
  console.log("commit updateEphemeral");
  state.ephemeral_token = newToken;
};

const updateRecentScans = (state, scans) => {
  console.log("commit updateRecentScans");
  state.recent_scans = scans;
};

const updatePatients = (state, patients) => {
  console.log("commit updateRecentScans");
  state.patients = patients;
};

const updateEntityDetails = (state, entity) => {
  console.log("commit updateEntityDetails");
  state.entity = entity;
};

const logOut = state => {
  console.log("commit logOut");
  state.jwt = null;
  state.loggedIn = false;
  localStorage.removeItem("jwt");

  router.push({ name: "Login" }).catch(e => {
    console.log(e);
  });
};

export default {
  updateJWT,
  loadJWT,
  updateLogin,
  updateLogout,
  updateEphemeral,
  updateRecentScans,
  updatePatients,
  updateEntityDetails,
  logOut
};
