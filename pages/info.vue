<template>
  <div>
    <h1>About <i>{{ newName }}</i></h1>
    <h2>age <b>{{ age * 2 }}</b></h2>
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
      this.name += '*';
    },
  },

}
</script>