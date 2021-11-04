<template>
  <div class="fixed-background">
    <div class="auth-card center">
      <div style="vertical-align: text-top" class="image1">
        <div style="color:white; margin-top:-35px;">
          <h2 style="color:white">Identity Web Administration</h2>
          <p>This portal lets you adminsitrate verifications, permissions, nfts and so forth</p>
        </div>
      </div>
      <div style="background:white; width:60%; padding: 15px">
        <div class="uk-container" style="margin-top:35px !important;"> 
        <img 
        style="
              width: 300px;
              height: auto;
              margin: 0 auto;
            " 
        src="@/assets/img/logored3.png">
        <!-- <form> -->
            <!-- <fieldset class="uk-fieldset"> -->

                <div class="uk-margin">
                    <input class="uk-input" type="text" placeholder="Usuario" v-model="username">
                </div>
                <div class="uk-margin">
                    <input class="uk-input" type="password" placeholder="Contraseña" v-model="password">
                </div>
                <div class="uk-margin">
                <button style="background-color:#bf374a; color: white" class="uk-button uk-form" @click="sendLogin"> Login</button>
              </div>
            <!-- </fieldset> -->
        <!-- </form> -->
        </div>
      </div>
    </div>
  <!-- <div class="uk-container uk-margin-large-top">
    <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
      <form>
          <fieldset class="uk-fieldset">
              <legend class="uk-legend">Iniciar sesión</legend>

              <div style="padding:2px !important"  class="uk-margin">
                  <input style="margin-top:5px !important"  placeholder="username" v-model="username">
              </div>

              <div class="uk-margin">
                  <input placeholder="password" type="password" v-model="password">
              </div>

              <div class="uk-margin">
                <button class="uk-button uk-form" @click="sendLogin"> Login</button>
              </div>

          </fieldset>
      </form>
    </div>    
  </div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    username: "",
    code: "",
    password: ""
  }),
  computed: {

  },
  methods: {
    ...mapActions(["login"]),
    clear() {
      this.email = "";
      this.password = "";
      this.code = "";
    },
    sendLogin() {
      this.login({ username: this.username, password: this.password });
    },
    alert(message, type) {
      this.$notify({
        message: message,
        icon: "add_alert",
        horizontalAlign: "center",
        verticalAlign: "top",
        type: type
      });
    }
  },
  mounted() {
  }
};
</script>

<style>
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.center {
  margin: auto;
  height:400px;
  margin-top:10%;
  width: 70%;
}
.fixed-background {
  /* background: url("~@/assets/img/img.png") no-repeat center center fixed; */
  background-color: gray;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; }

.image1 {
  /* background: url("~@/assets/img/img.png") no-repeat top; */
  background-color: black;
  background-size: cover;
  padding: 80px 40px;
  width:40%;
}

.auth-card {
  display: flex;
  flex-direction: row;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.1); }
  .auth-card .image-side {
    width: 40%;
    background: url("~@/assets/img/img.png") no-repeat center top;
    background-size: cover;
    padding: 80px 40px; }
    .auth-card .image-side .h3 {
      line-height: 0.8rem; }
  .auth-card .form-side {
    width: 60%;
    padding: 80px; }
  @media (max-width: 991px) {
    .auth-card {
      flex-direction: column; }
      .auth-card .image-side {
        width: 100%;
        padding: 60px; }
      .auth-card .form-side {
        width: 100%;
        padding: 60px; } }
  @media (max-width: 767px) {
    .auth-card p.h2 {
      font-size: 1.6rem; } }
  @media (max-width: 575px) {
    .auth-card {
      flex-direction: column; }
      .auth-card .image-side {
        padding: 35px 30px; }
      .auth-card .form-side {
        padding: 35px 30px; }
      .auth-card .logo-single {
        margin-bottom: 20px; }
      .auth-card p.h2 {
        font-size: 1.4rem; } }

</style>
