<template>
  <div>
    <div>
      <v-layout>
        <v-flex>
          <v-icon class="blue--text">face</v-icon>
          ครูที่ปรึกษา
        </v-flex>
      </v-layout>
      <div v-for="t in teachers" :key="t.teacher_id">{{ t.teacher_name }}</div>
    </div>
    <div>
      <v-layout>
        <v-flex>
          <v-icon class="blue--text">class</v-icon>
          กลุ่ม
        </v-flex>
      </v-layout>

      <div v-for="g in groups" :key="g">
      <v-btn color="error" @click="doList(g)">{{ g }}</v-btn></div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'default2',
  data() {
    return {
      teachers: [],
      groups: [],
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  async created() {
    console.log(this.user)
    let res = await this.$http.get('/home?teacher_code=' + this.user.person_idcard)
    if (!res.data.ok) {
      return
    }
    this.teachers = res.data.teachers
    this.groups = res.data.groups
  },
  methods: {
    async doList(r) {
      console.log('test List data')
      this.$router.push('/liststudent?group=' + r)
    },
  },
}
</script>
