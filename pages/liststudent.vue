<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="error" dark class="mb-2">เพิ่มข้อมูล</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.code" label="code"/>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="name"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="students"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.code }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>

        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="red">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
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

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: 'รหัส' },
        { text: 'ชื่อ-สกุล' },
        { text: 'ดำเนินการ'  },
      ],
      students: [],
      editedIndex: -1,
      editedItem: {
        code: '',
        name: 0

      },
      defaultItem: {
        code: '',
        name: 0,

      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'เพิ่มข้อมูล' : 'แก้ไข ข้อมูล'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
     async initialize () {
        let res = await this.$http.get('/liststudent?group=' + this.$route.query.group)
    if (!res.data.ok) {
      return
    }
    this.students = res.data.students
  },

      editItem (item) {
        this.editedIndex = this.students.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.students.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.students.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      async save () {
        console.log('save')
        if (this.editedIndex > -1) {
          Object.assign(this.students[this.editedIndex], this.editedItem)
          let res = await this.$http.post('/student/save/', { code: this.editedItem.code, name: this.editedItem.name })
      if (res.data.ok) {
        console.log(res.data)
        // SAVE สำเร็จ
      } else {
        console.log('no',res.data)
        // SAVE ไม่เสร็จ
      }

        } else {
          this.students.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>
