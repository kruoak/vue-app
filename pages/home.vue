<template>
  <div>
    <div>
      <h1>ครูที่ปรึกษา</h1>
      <div v-for="t in teachers" :key="t.teacher_id">{{ t.teacher_name }}</div>
    </div>
    <div>
      <h1>กลุ่ม</h1>
      <div v-for="g in groups" :key="g"> @click{{ g }}</div>
    </div>
  </div>
</template>
<script>
export default {
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
    let res = await this.$http.get('/home?teacher_code=' + this.user.personIdcard)
    if (!res.data.ok) {
      return
    }
    this.teachers = res.data.teachers
    this.groups = res.data.groups
  },
}
</script>
