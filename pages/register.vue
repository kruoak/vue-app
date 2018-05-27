<template>
  <v-container grid-list-xl>
    <v-layout column>
      <v-flex xs12>
        <h1 class="title"><v-icon>contacts</v-icon>  Register</h1>
      </v-flex>
      <v-flex xs12 sm12><v-text-field v-model="fname" label="First Name:"/> </v-flex>
      <v-flex xs12 sm12><v-text-field v-model="lname" label="Last Name:"/> </v-flex>
      <v-flex xs12 sm12><v-text-field v-model="email" label="Email:"/> </v-flex>
      <v-flex >
        <v-layout>
          <v-flex xs6><v-text-field v-model="pass" label="Password:" type="password"/> </v-flex>
          <v-flex x6> <v-text-field v-model="pass2" label="Password Confrim:" type="password"/> </v-flex>
        </v-layout>

      </v-flex>
      <v-flex>
        <v-radio-group v-model="radioGroup">
          <v-radio label="ครู" value="T"/>
          <v-radio label="นักเรียน-นักศึกษา" value="S"/>
        </v-radio-group>
      </v-flex>
      <v-flex xl12><v-btn color="error" @click="register">Submit</v-btn></v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  layout: 'public',
  data() {
    return {
      user: '',
      pass: '',
      pass2: '',
    }
  },
  methods: {
    register() {

    },
  },
}
</script>
