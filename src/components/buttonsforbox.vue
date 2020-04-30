<template>
  <div class="text-left">
    <v-container fluid id="dropdown-example">
      <v-col cols="5" sm="4">
        <v-overflow-btn
        v-model="$store.state.lanused"
          class="my-2"
          :items="dropdown_icon"
          label="Choose Language"
          segmented
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-col>
    </v-container>
    <v-btn class="ma-2" rounded color="secondary" @click="runClicked">Run</v-btn>


    <v-btn rounded color="blue-grey" class="ma-2 white--text">
      Save
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>

    <v-btn class="ma-2" rounded color="info">Share</v-btn>
    <v-container fluid>
      <v-switch v-model="switch1" :label="`Enable custom input `"></v-switch>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col cols="3" sm="4">
          <v-textarea v-model="custominput" color="teal" v-if="switch1 == true">
            <template v-slot:label>
              <div>Enter custom input</div>
            </template>
          </v-textarea>
        </v-col>

        <v-col cols="3" sm="4">
          <v-textarea v-model="nameofperson" color="teal" v-if="switch1 == true">
            <template v-slot:label>
              <div>Name</div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      switch1: true,
      select:null,
      custominput: null,
      nameofperson: null,

      dropdown_icon: [
        { text: "Python", callback: () => this.$store.commit("LANGUAGE","python" ) },
        { text: "C++", callback: () => this.$store.commit("LANGUAGE","clike")  }
      ]
    };
  },
  methods: {
    runClicked: function() {
      let currentcode = this.$store.state.DatainJs;
      // var currentcustominput = this.custominput;
      let data = {
        lang_code: "python",
        code: currentcode,
        input: this.custominput,
        username: this.nameofperson
      };
      let vue = this;
      fetch("http://a58482d7.ngrok.io", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          return response.json();
        })
        .then(res => {
          console.log(res);
          vue.outputdata = res.message;
          this.$store.commit("STORETHEOUTPUT", vue.outputdata);
        });
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>