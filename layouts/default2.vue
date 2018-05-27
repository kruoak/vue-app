<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right/>
    <v-toolbar app class="cyan white--text">
      <v-toolbar-title >
        <v-icon class="white--text">directions_bike
        </v-icon>
        VehicleApp
      </v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click="gotoLogout">
        <v-icon class="white--text" >highlight_off</v-icon>
      </v-btn>

    </v-toolbar>

    <v-content>
      <nuxt/>
    </v-content>

    <v-footer height="auto">
      <v-card flat tile class="flex">
        <v-card-title class="cyan white--text">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            white
            class="mx-1"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="grey lighten-2 justify-center">
          &copy;2018 — <strong>IT-CTC</strong>
        </v-card-actions>
      </v-card>

    </v-footer>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
  }),

  computed: {
    online: {
      get() {
        return this.$store.state.online
      },
      set(value) {
        this.$store.commit('setOnline', value)
      },
    },
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(value) {
        this.$store.commit('setDrawer', value)
      },
    },
  },

  created() {
    // let user = window.sessionStorage.getItem('user')
    //  if (!user){
    //    return this.$router.replace('/')
    //  }
    //  this.user = JSON.parse(user)
    // this.$store.dispatch('getStudents')
    this.$store.dispatch('loadUser')
  },

  mounted() {
    this.$store.commit('setOnline', window.navigator.onLine)
    window.addEventListener('offline', this.toggleNetworkStatus)
    window.addEventListener('online', this.toggleNetworkStatus)
  },

  beforeDestroyed() {
    window.removeEventListener('offline', this.toggleNetworkStatus)
    window.removeEventListener('online', this.toggleNetworkStatus)
  },

  methods: {
    toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    },
    goto(item) {
      this.$router.push(item.path)
    },
  },
}
</script>
