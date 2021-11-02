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
        const wax = new waxjs.WaxJS('{"server_version":"bb3c7bd3","chain_id":"1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4","head_block_num":148749440,"last_irreversible_block_num":148749114,"last_irreversible_block_id":"08ddbb3a94081c590db4391dcd96789724092265479902f0f948b8c7d29023e0","head_block_id":"08ddbc806d1e94198c4f8f08a44a7052fb8f18dfeb7f9b8843d0fb3102674f01","head_block_time":"2021-11-02T04:37:48.500","head_block_producer":"teamgreymass","virtual_block_cpu_limit":2316967,"virtual_block_net_limit":1048576000,"block_cpu_limit":200000,"block_net_limit":1048576,"server_version_string":"v2.0.11wax01","fork_db_head_block_num":148749440,"fork_db_head_block_id":"08ddbc806d1e94198c4f8f08a44a7052fb8f18dfeb7f9b8843d0fb3102674f01","server_full_version_string":"v2.0.11wax01-bb3c7bd310b71fb8131f87128457dd7aa127fd9a-dirty"}', null, null, false);
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

Vue.mixin({
  methods: {
    loginWax: () => login(),
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
