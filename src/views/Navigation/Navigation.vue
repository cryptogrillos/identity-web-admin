<template>
    
    <div
      v-if="$route.path === '/login'"
    >
      <router-view />
    </div>
    <div v-else>
      <div id="app">
        <div
          id="top"
          uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; show-on-up: true; animation: uk-animation-slide-top"
        >
          <nav
            class="uk-width-1-1 uk-flex-column uk-box-shadow-medium"
            uk-navbar
          >
            <div class="uk-navbar-container uk-flex">
              <div class="uk-navbar-left">
                <a
                  style="margin-left: 20px"
                  id="navigation-menu"
                  dusk="navigation-menu"
                  class="uk-navbar-toggle"
                  uk-navbar-toggle-icon
                  href="#offcanvas"
                  uk-toggle
                ></a>
              </div>
              <div class="uk-navbar-center">
                <img 
                  style="
                        width: 300px;
                        height: auto;
                        background-position: 50%;
                        margin: 0 auto;
                      " 
                  src="@/assets/img/logored3.png">
              </div>
              <div style="padding: 20px" class="uk-navbar-right">
                <span
                  style="margin-right: 10px !important; display: contents"
                  >
                  <h6
                  style="margin-right: 10px; display: contents"
                  >{{ waxUser }}</h6>
                </span>
                <img 
                  style="
                        margin-left: 20px;
                        width: 40px;
                        display: inline-block;
                        height: 40px;
                        background: $white-color;
                        border-radius: 50%;
                        text-align: center;
                        overflow: hidden;
                      " 
                  src="@/assets/img/user.png">
              </div>
            </div>

            <div class="uk-navbar-container">
              <div class="uk-navbar-left">
                <ul class="uk-navbar-nav uk-overflow-auto">
                 
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div style="margin-top:25px !important" class="uk-container uk-padding-top uk-position-relative content">
          <router-view />
        </div>

        <div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
          <div class="uk-offcanvas-bar">
            <div class="uk-panel uk-text-center">
              <ul class="uk-nav uk-nav-default tm-nav uk-margin-top">
                <!-- <li class="uk-nav-header">{{category}}</li> -->
                <!-- <li v-for="(p, label) in pages" exact><a :href="'./'+p">{{label}}</a></li> -->
                <!-- <div class="uk-text-center">
                </div>
                <div
                  class="user-separator uk-flex uk-flex-middle uk-margin-small-top uk-text-center"
                >
                
                </div> -->
                <li>
                    <router-link 
                    class="nav-link-custom"
                    uk-toggle
                    href="#offcanvas"
                    to="/home"
                    >
                    <ul v-bind:class="{ activelink: $route.path=='/home'}">
                      <li>
                        <i style="font-size: 30px;" class="iconsmind-Home"></i>
                      </li>
                      <li>
                        <span> Home </span>
                      </li>
                    </ul>
                    </router-link>
                  </li>
                  <hr style="background: #A7AAAB; opacity: 0.5;">
                  <li>
                    <router-link 
                    class="nav-link-custom"
                    uk-toggle
                    href="#offcanvas"
                    to="/verify">
                    <ul v-bind:class="{ activelink: $route.path=='/verify' }">
                      <li>
                        <i style="font-size: 30px;" class="iconsmind-Stamp-2"></i>
                      </li>
                      <li>
                        <span> Verify Identity </span>
                      </li>
                    </ul>
                    </router-link>
                  </li>
                  <hr style="background: #A7AAAB; opacity: 0.5;">
                  <li>
                    <router-link 
                    class="nav-link-custom"
                    uk-toggle
                    href="#offcanvas" 
                    to="/verifications">
                    <ul v-bind:class="{ activelink: $route.path=='/verifications'}">
                      <li>
                        <i style="font-size: 30px;" class="iconsmind-Letter-Close"></i>
                      </li>
                      <li>
                        <span> Verifications </span>
                      </li>
                    </ul>
                    </router-link>
                  </li>
                  <hr style="background: #A7AAAB; opacity: 0.5;">
                  <li>
                    <router-link 
                    class="nav-link-custom"
                    uk-toggle
                    href="#offcanvas"
                    to="/permissions">
                    <ul v-bind:class="{ activelink: $route.path=='/permissions' }">
                      <li>
                        <i style="font-size: 30px;" class="iconsmind-Key"></i>
                      </li>
                      <li>
                        <span style="margin-bottom:20px"> Permissions </span>
                      </li>
                    </ul>                     
                    </router-link>
                </li>
                <hr style="background: #A7AAAB; opacity: 0.5;">
                <li>
                  <a 
                  class="nav-link-custom"
                  @click="logout"
                  uk-toggle
                  href="#offcanvas"
                  >
                  <ul>
                      <li>
                        <span style="font-size: 30px;" uk-icon="icon: sign-out; ratio: 2"></span>
                      </li>
                      <li>
                        <span style="margin-bottom:20px"> Log out </span>
                      </li>
                    </ul>
                  
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    </div>
        
</template>
<script>
import UIkit from "uikit";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navigation",

  data() {
    return {
      waxUser: localStorage.getItem('waxUserAccount') ? localStorage.getItem('waxUserAccount') : "User",
      vuexHydrated: false,
      langs: ["es", "en"]
    };
  },

  beforeMount() {

  },


  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },


};
</script>

<style>
.uk-navbar-container {
  background: white !important;
}
.uk-offcanvas-bar{
  background: white;
  color: black !important;
}
.nav-link-custom {
  color: #212121 !important;
}

.activelink {
  color:#bf374a
}
</style>