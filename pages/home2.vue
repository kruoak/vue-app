<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"/>
          <v-list-tile v-else :key="item.title" avatar @click="">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"/>
              <v-list-tile-sub-title v-html="item.subtitle"/>
            </v-list-tile-content>
          </v-list-tile>
        </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
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
<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Today' },
          { avatar: './images/teacher/T1.jpg', title: 'นายสมิทธ์  สุขขี', subtitle: "<span class='text--primary'>ออกแบบและพัฒนา" },
          { divider: true, inset: true },
          { avatar: './images/teacher/T2.jpg', title: 'นายอลงกรณ์  ภูคงคา ', subtitle: "<span class='text--primary'>ออกแบบและพัฒนา" },
          { divider: true, inset: true },
          { avatar: './images/teacher/T3.jpg', title: 'นายสมรักษ์  สุขปานประดิษฐ์', subtitle: "<span class='text--primary'>ออกแบบและพัฒนา" },
          { divider: true, inset: true },
          { avatar: './images/teacher/T4.jpg', title: 'นายอัฏฐพล  กาญจนเทพ', subtitle: "<span class='text--primary'>ออกแบบและพัฒนา" },
          { divider: true, inset: true },
          { avatar: './images/teacher/T5.jpg', title: 'นางสาวกฤษณา  แนววิเศษ', subtitle: "<span class='text--primary'>ออกแบบและพัฒนา" },
        ]
      }
    }
  }
</script>
