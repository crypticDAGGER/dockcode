<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title><strong>Codeblitz</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-4" dark icon @click="darkmode">
        <ion-icon name="contrast-sharp" style="zoom:2.0;" color="primary"></ion-icon>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  methods: {
    darkmode() {
      if (this.$vuetify.theme.dark == true) {
        this.$vuetify.theme.dark = false;
      } else {
        this.$vuetify.theme.dark = true;
      }
    }
  },
  data: () => ({
    drawer: null
  })
};
</script>