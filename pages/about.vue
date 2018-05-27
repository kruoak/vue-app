<template>
  <v-layout column>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-subheader>สมาชิกกลุ่ม</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex v-for="i in 5" :key="i" xs4>
              <img :src="`/images/teacher/T1.jpg`" class="image" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
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
