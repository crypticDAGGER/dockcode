<template>
  <v-app>
    <v-content>
      <buttonsforbox />
      <div v-if = " $store.state.lanused == Python ">
      <pythoneditor />
           </div>
      <div v-else>
      <clikeeditor/>
      </div>
      <outputbox />

      <navigation />
      <fotter />
    </v-content>
  </v-app>
</template>

<script>
import navigation from "./components/navigation";
import fotter from "./components/fotter";
import buttonsforbox from "./components/buttonsforbox";
import pythoneditor from "./components/pythoneditor";
import clikeeditor from "./components/clikeeditor";
import outputbox from "./components/outputbox";


export default {
  name: "App",

  components: {
    fotter,
    navigation,
    buttonsforbox,
    pythoneditor,clikeeditor,
    outputbox
  },
  data: () => ({
    //
  })
};
</script>
