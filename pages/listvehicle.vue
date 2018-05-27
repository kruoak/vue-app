<template>
  <div>
    <h1>แสดงรายการพาหนะ</h1>
    <div v-for="v in vehicles" :key="v.id">{{ v.std_name }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vehicles: [],
    }
  },
  async created() {
    console.log('ok=', this.$route.query.std_code)
    let res = await this.$http.get('/listvehicle?std_code=' + this.$route.query.code)
    if (!res.data.ok) {
      return
    }
    this.vehicles = res.data.vehicles
    console.log('v=', this.vehicles)
  },
}
</script>
