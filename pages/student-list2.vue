<template>
  <v-container>
    <v-layout column>
      <v-flex><v-select v-model="room" :items="roomList"/></v-flex>
      <v-flex>
        <v-data-table
          :headers="headers"
          :items="students2"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.code }}</td>
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.room }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    // let students = []
    // for (let i = 1; i <= 100; i++) {
    //   students.push({
    //     code: ('' + i).padStart(4, '0'),
    //     name: `Name${i}`,
    //     room: '' + Math.ceil(i / 30),
    //   })
    // }
    return {
      // students,  โหลดมาจากหน้าอื่นๆ
      room: '3',
      headers: [
        {
          text: 'รหัส',
          align: 'left',
          value: 'code',
        },
        { text: 'ชื่อ - นามสกุล', value: 'name' },
        { text: 'ห้อง', value: 'room' },
      ],
    }
  },
  computed: {
    students() {
      return this.$store.state.students
    },

    roomList() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (out.indexOf(this.students[i].room) === -1) {
      //     out.push(this.students[i].room)
      //   }
      // }
      // let out = {}
      // for (let i = 0; i < this.students.length; i++) {
      //   if (!out[this.students[i].room]) {
      //     out[this.students[i].room] = true
      //   }
      // }
      // return Object.keys(out) // ['1', '2', '3', '4']
      // prev = ['1']
      // return this.students.reduce((prev, st) => {
      //   if (prev.indexOf(st.room) === -1) {
      //     prev.push(st.room)
      //   }
      //   // return prev
      // }, [])
      return Object.keys(this.students.reduce((p, st) => {
        p[st.room] = st.room
        return p
      }, {}))
    },
    students2() {
      // let out = []
      // for (let i = 0; i < this.students.length; i++) {
      //   if (this.students[i].room === this.room) {
      //     out.push(this.students[i])
      //   }
      // }
      // return out
      return this.students.filter(st => st.room === this.room)
    },
  },
}
</script>
<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
</script>
