<template>
  <div>
    <h1 v-if="ok">About <i>{{ newName }}</i></h1>
    <h2 v-show="ok">age <b>{{ age * 2 }}</b></h2>
    <input :value="name" type="text"><br>
    <input v-model="name" type="text"><br>
    <input v-model="name" type="text"><br>
    <button @click="doSave">SAVE</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Somsak Lim',
      age: 25,
      ok: true,
    }
  },
  computed: {
    upperName() {
      return this.name.toUpperCase()
    },
    newName() {
      var tmp = this.name.split(' ')
      if (tmp.length === 1) {
        return this.name
      }
      return tmp[0] + ' ' + tmp[1].substr(0, 1)
    },
  },
  methods: {
    doSave() {
      this.name += '*'
      this.ok = !this.ok
    },
  },
}
</script>