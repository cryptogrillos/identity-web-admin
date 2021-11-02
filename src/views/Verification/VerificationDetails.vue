<template>
    <div class="uk-container">
        <h2> Detalle de Cita </h2>
        <h4> Consulta </h4>
        <hr>
        <div style="display:flex; overflow-y: auto;">
            <div style="width:30%">
                <div style="background-color:white;">
                    <div v-for="element in list" v-bind:key="element" style="display:flex; padding-left: 0px; padding: 10px 3px 5px 3px; margin-bottom: 10px" class="uk-card uk-card-default uk-card-body uk-card-hover">
            <div style="width:75%; margin-left: 15px">
                <h3 class="uk-card-title">Detalle {{element}}</h3>
                <div class="uk-column-1-2">
                    <p style="color:gray">2019-11-19 6:23 pm</p>
                </div>
            </div>

        </div>
                </div>
            </div>
            <div style="width:70%">
                <div style="display:flex; padding: 3px;">
                    <div style="width:50% !important; background-color:black;height:300px; margin-right:4px"></div>
                    <div style="width:50% !important; background-color:black; height:300px; "></div>
                </div>
                <div style="display:flex; margin-left: 25%">
                    <div>

                    </div>
                </div>
            </div>
        </div>
        
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
      methodOne(){
          console.log("hello world");
      }
  },
};
</script>
