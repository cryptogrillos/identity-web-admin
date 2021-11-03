import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import axios from "axios";
import moment from "moment";
//import VueSelect from "vue-select";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// Vuex setup
import { store } from "./store/index";

// router setup
import router from "./routes/index";
import * as waxjs from "@waxio/waxjs/dist";

import VueIpfs from './plugins/vue-ipfs'
import * as IPFS from 'ipfs-core'
let ipfsVar = null;
// Plugins
// import GlobalComponents from "./globalComponents";
// import GlobalDirectives from "./globalDirectives";
// import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
// import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

Vue.prototype.$Chartist = Chartist;
UIkit.use(Icons);
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// export default ipfs;

async function login() {
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

async function ipfs() {
  if (!ipfsVar) {
    ipfsVar = await IPFS.create();
  }

  const { cid } = await ipfsVar.add('Hello world' + Date.now());
  console.info(cid)
}

Vue.mixin({
  methods: {
    loginWax: () => login(),
    ipfsAdd: () => ipfs(),
  }
})
Vue.use(VueRouter);
// Vue.use(MaterialDashboard);
// Vue.use(GlobalComponents);
// Vue.use(GlobalDirectives);
// Vue.use(Notifications);
// app.use(VueIpfs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
