<template>
    <div class="uk-container">
        <h2> Verifications </h2>

        <hr>

<div style="width:60%; margin-left:20%;" class="uk-child-width-1-1@m uk-grid-small uk-grid-match" uk-grid>
    <div>
        <div v-for="element in list" v-bind:key="element" style="display:flex; padding-left: 0px; padding: 10px 3px 5px 3px; margin-bottom: 10px" class="uk-card uk-card-default uk-card-body uk-card-hover">
            <div style="width:25%">
            <img 
                  style="
                        margin-left: 20px;
                        display: inline-block;
                        background: $white-color;
                        text-align: center;
                        overflow: hidden;
                        max-height:100px;
                        max-width:150px
                      " 
                  src="@/assets/img/img.png">
            </div>
            <div style="width:50%">
                <h3 class="uk-card-title">Verification {{element}}</h3>
                <div class="uk-column-1-3">
                    <p>NFT</p>
                    <p>{{ Date.now() }}</p>
                    <p><i class="fa fa-circle" style="color:green; font-size: 12px"></i>Active</p>
                </div>
            </div>
            <div class="uk-text-right" style="width:20%">
                <button @click="deleteVerification(element)" class="uk-button uk-button-danger" style="margin-top: 30%;">  
                    <span uk-icon="trash"></span>
                </button>
            </div>
        </div>
    </div>
</div>

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
      list:[1, 2, 3, 4, 5],
      searchInput: "",
    };
  },

  methods: {
      deleteVerification(element) { 
          console.log("delete verification " + element)
      },
      methodOne(){
          console.log("hello world");
      }
  },
};
</script>
