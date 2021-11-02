import Axios from "axios";
import router from "@/routes/index";
import { store } from "@/store/index";

// const loginAPI = (context, data) => {
//   console.log("start loginAPI()");
//   Axios.post(store.state.apiURL + "auth/login/", data)
//     .then(res => {
//       if (res.data.hasOwnProperty("access")) {
//         console.log("User has MFA disabled.");
//         store.commit("updateJWT", res.data.access);
//         router.push({ name: "Dashboard" }).catch(e => {
//           console.log(e);
//           alert("Usuario/Password incorrecto");
//         });
//       } else if (res.data.hasOwnProperty("ephemeral_token")) {
//         store.commit("updateEphemeral", res.data.ephemeral_token);
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Usuario/Password incorrecto");
//     });
// };

const login = (context, data) => {
  console.log("start login()");
  console.log(data);
  store.commit("updateLogin");
  localStorage.setItem('authIdentity', true);
  router.push({ name: "Home" })
};

const logout = (context, data) => {
  console.log("start logout()");
  console.log(data);
  store.commit("updateLogout");
  localStorage.removeItem('authIdentity');
};

// const loginMFA = (context, code) => {
//   console.log("start loginAPI()");
//   Axios.post(store.state.apiURL + "auth/login/code/", {
//     ephemeral_token: store.state.ephemeral_token,
//     code: code
//   })
//     .then(res => {
//       if (res.data.hasOwnProperty("access")) {
//         store.commit("updateJWT", res.data.access);
//         router.push({ name: "Dashboard" }).catch(e => {
//           console.log(e);
//           alert("Código incorrecto");
//         });
//       } else {
//         alert("Código incorrecto");
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       alert("Código incorrecto");
//     });
// };

export default {
  login,
  logout,
};
