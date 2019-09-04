<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase ma-2">Logo</v-toolbar-title>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn x-small tile color="white" v-on="on">Opción 1</v-btn>
        </template>
        <v-list >
          <v-list-item dense v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn x-small tile color="indigo" dark v-on="on">Opción 2</v-btn>
        </template>
        <v-list >
          <v-list-item dense v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-app-bar app bottom>
      <v-card>
        <v-tabs background-color="transparent" show-arrows >
          <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
          <v-tab v-for="i in 30" :key="i" :href="'#tab-' + i" >
            Item {{ i }}
          </v-tab>
        </v-tabs>
      </v-card>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
  }),
};
</script>