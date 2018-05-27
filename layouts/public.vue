<template>
  <v-app>
    <v-layout column>
      <v-flex xs12 sm6 offset-sm3>
        <v-toolbar color="cyan" dark>
          <v-btn icon @click="gotoHome">
            <v-icon >fast_rewind</v-icon>
          </v-btn>
          <v-icon class="white--text">directions_bike</v-icon>
          <v-toolbar-title>Vihicle</v-toolbar-title>
          <v-spacer/>

        </v-toolbar>
      </v-flex>
    </v-layout>

    <nuxt/>

    <v-footer height="auto">
      <v-card flat tile class="flex">
        <v-card-actions class="cyan dark  justify-center white--text">
          &copy;2018 — <strong>IT-CTC</strong>
        </v-card-actions>
      </v-card>

    </v-footer>

  </v-app>

</template>
<script>
export default {
  data: () => ({

  }),
  methods: {
    gotoHome() {
      this.$router.replace('/')
    },
  },
}
</script>
