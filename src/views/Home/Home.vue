<template>
    <div class="uk-container">
        <h2> Welcome - Identity Admin </h2>

        <hr>

        <div>
            <p>
                Object Sign in : {{ objectSignInView }}
            </p>
            <button @click="getLogin"> 
                Sign in WAX
            </button>
        </div>

        <h3> IPFS </h3>
        <button @click="ipfsAddLocal"> 
            Add to IPFS
        </button>

        <!-- <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>1</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>2</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>3</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>4</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>5</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>6</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>7</h1></div>
                </li>
                <li>
                    <div style="background: gray; height: 170px; margin: 10px"></div>
                    <div class="uk-position-center uk-panel"><h1>8</h1></div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

        </div>

        <div class="uk-container" style="display:flex">
            <div style="background-color: gray; margin: 20px; height: 300px; width:50%"></div>
            <div style="background-color: gray; margin: 20px; height: 300px; width:50%"></div>
        </div>

        <div class="uk-container" style="display:flex">
            <div style="background-color: gray; margin: 20px; height: 300px; width:100%"></div>
        </div> -->

        <!-- <ul uk-accordion>
            <li class="uk-open">
                <a class="uk-accordion-title" href="#">Item 1</a>
                <div class="uk-accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </li>
            <li>
                <a class="uk-accordion-title" href="#">Item 2</a>
                <div class="uk-accordion-content">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                </div>
            </li>
            <li>
                <a class="uk-accordion-title" href="#">Item 3</a>
                <div class="uk-accordion-content">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                </div>
            </li>
        </ul> -->
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: function () {
    return {
      counter: 0,
      patientsArr: [],
      searchInput: "",
      objectSignInView: localStorage.getItem('userAccountWax') ? { userAccount: localStorage.getItem('userAccountWax'),  pubKeys: localStorage.getItem('pubKeysWax')} : "empty",
    };
  },

  methods: {
      async getLogin(){
        let objectSign = await this.loginWax();
        this.objectSignInView = objectSign;
        console.log("login")
      },
      async ipfsAddLocal(){
          await this.ipfsAdd();
          console.log("added");
      },
      methodOne(){
          console.log("hello world");
      }
  },
};
</script>