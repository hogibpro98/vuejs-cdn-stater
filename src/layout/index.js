import { ref, createApp, computed, onMounted } from 'vue'

export default {
    name: "Layout",
    template: `
    <v-card class="layout-padding bg-transparent">
      <v-layout>
        <v-app-bar
          prominent
        >
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>Vuetify + Vue 3 + Pinia + Vuex + AXIOS</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>
  
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
          class="icon-link"
        >
          <v-list-item class="border-bottom-1-whitesmoke" v-for="item in items" :key="item.code" :prepend-icon="item.icon">
            <router-link class="nav-link" :to="item.value"> {{item.title}} </router-link>
          </v-list-item>
        </v-navigation-drawer>
        <v-main>
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
        </v-main>
      </v-layout>
    </v-card>
    `,
    setup() {
        const drawer = ref(false);
        const group = ref(null);
        const items = ref([
          {
              title: "Listening Practice Through Dictation",
              value: "/",
              code: "1",
          },
          {
              title: "English speaking practice",
              value: "/speech",
              code: "2",
          },
          {
              title: "Global",
              value: "/global",
              code: "3",
          },
      ]);

        return {
            drawer,
            group,
            items,
        };
    },
};
