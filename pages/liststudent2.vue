<template>
  <div>
    <h1>รายชื่อนักศึกษา</h1>
    <div v-for="s in students" :key="s.code">
    <v-btn @click="doList(s.code)">{{ s.name }}</v-btn></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
    }
  },
  async created() {
    let res = await this.$http.get('/liststudent?group=' + this.$route.query.group)
    if (!res.data.ok) {
      return
    }
    this.students = res.data.students
  },
  methods: {
    async doList(r) {
      console.log('test List data')
      this.$router.push('/listvehicle?code=' + r)
    },
  },
}
</script>
