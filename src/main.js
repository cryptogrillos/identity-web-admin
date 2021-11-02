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

// Plugins
// import GlobalComponents from "./globalComponents";
// import GlobalDirectives from "./globalDirectives";
// import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
// import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

Vue.prototype.$Chartist = Chartist;
UIkit.use(Icons);

Vue.use(VueRouter);
// Vue.use(MaterialDashboard);
// Vue.use(GlobalComponents);
// Vue.use(GlobalDirectives);
// Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
