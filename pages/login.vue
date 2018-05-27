<template>
  <v-container>
    <v-layout wrap justify-space-around align-center>
      <v-avatar color="cyan" size="80px">
        <v-icon dark size="50px">perm_identity</v-icon>
      </v-avatar>
    </v-layout>
    <v-flex xs12>
      <v-card color="cyan lighten-4" class="white--text">
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-layout column>
              <v-flex>
                <v-text-field v-model="form.login" append-icon="person" label="ชื่อผู้ใช้"/>
              </v-flex>
              <v-flex>
                <v-text-field v-model="form.pass" append-icon="enhanced_encryption" label="รหัสผ่าน"/>
              </v-flex>
              <v-flex>
                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Remember Me"
                  required
                />
              </v-flex>
              <v-flex>
                <v-btn color="error" @click="doLogin">Login</v-btn>
              </v-flex>
              <v-layout>
                <v-flex>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-3 white--text"
                    color="cyan"
                  >
                  <v-icon size="20px">{{ icon }}</v-icon>Google</v-btn>
                  <v-btn
                    v-for="icon2 in icons2"
                    :key="icon2"
                    class="mx-3 white--text"
                    color="cyan"
                  >
                  <v-icon size="20px">{{ icon2 }}</v-icon>Facebook</v-btn>

                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs6 order-lg2>
                  <nuxt-link to="/">Forget Your Password?</nuxt-link>
                </v-flex>
                <v-flex xs6>
                  <nuxt-link to="/register">Sign Up</nuxt-link>
                </v-flex>
              </v-layout>

            </v-layout>
        </v-layout></v-container>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
let blankform = {
  login: '',
  pass: '',
}
export default {
  layout: 'public',
  data() {
    return {
      form: {
        form: JSON.parse(JSON.stringify(blankform)),
      },
      icons: ['fab fa-google-plus'],
      icons2: ['fab fa-facebook'],
    }
  },
  methods: {
  //   async dologin() {
  //     let res = await this.$http.post('/login', this.form)
  //     if (!res.data.ok) {
  //       // TODO: login ไม่สำเร็จ
  //       return
  //     }
  //     console.log('login สำเร็จ')
  //     // 1. จำ user/login
  //     window.localStorage.setItem('user', JSON.stringify(res.data.user))
  //     // 2. ไปหน้า home
  //     this.$router.push('/home')
  //   },
  // },
    async doLogin() {
      let res = await this.$http.post('/login', this.form)
      if (!res.data.ok) {
        // TODO: login ไม่สำเร็จ
        return
      }
      console.log('login สำเร็จ')
      // 1. จำ user/login
      window.sessionStorage.setItem('user', JSON.stringify(res.data.user))
      // 2. ไปหน้า home
      this.$router.push('/home')
    },
  },
}
</script>
