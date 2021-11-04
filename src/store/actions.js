import Axios from "axios";
import router from "@/routes/index";
import { store } from "@/store/index";
import * as waxjs from "@waxio/waxjs/dist";
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

const login = async function(context, data) {
  async function loginActions() {
    try {
        const wax = new waxjs.WaxJS('https://wax.greymass.com', null, null, false);
        let userAccount = await wax.login();
        let pubKeys = wax.pubKeys;
        let str = 'Account: ' + userAccount + '<br/>Active: ' + pubKeys[0]
            + '<br/>Owner: ' + pubKeys[1]
        console.log(str)
        console.log("aaaa");
        localStorage.setItem('userAccountWax', userAccount);
        localStorage.setItem('pubKeysWax', pubKeys);
        return {
          userAccount: userAccount,
          pubKeys: pubKeys,
        }
    } catch (e) {
        console.log(e.message);
    }
  } 
  console.log("start login()");
  console.log(data);
  // store.commit("updateLogin");
  let objectSign = await loginActions();
  if (objectSign) {
    console.log(objectSign)
    localStorage.setItem('authIdentity', true);
    localStorage.setItem('waxUser', objectSign);
    localStorage.setItem('waxUserAccount', objectSign.userAccount);
    console.log("login success")
    router.push({ name: "Home" })
  } else {
    console.log("login failed")
  }
};

const logout = (context, data) => {
  console.log("start logout()");
  console.log(data);
  store.commit("updateLogout");
  localStorage.removeItem('authIdentity');
  localStorage.removeItem('waxUser');
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
