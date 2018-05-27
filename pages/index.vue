<template>
  <div>
    <v-card>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex
            v-for="card in cards"
            v-bind="{ [`xs${card.flex}`]: true }"
            :key="card.title"
          >
            <v-card>
              <v-card-media
                :src="card.src"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline back--text" v-text="card.title"/>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <v-spacer/>
                <v-btn icon>
                  <v-btn color="error" class="center">Click</v-btn>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>

</template>
<script>
export default {
  data: () => ({
    cards: [
      { title: 'Student', src: '/images/cards/student.jpg', flex: 12 },
      { title: 'Motorcycle', src: '/images/cards/bye01.jpg', flex: 6},
      { title: 'Car', src: '/images/cards/car.jpg', flex: 6 },
    ],
  }),
  methods: {
    gotoAbout() {
      this.$router.replace('/about')
      this.$router.go(-1)
    },
  },
}
</script>
