<template>

  <v-container fluid>
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>Columna de 12</h1>
      </v-flex>
      <v-flex class="primary" xs6>
        <h1>Columna de 6</h1>
      </v-flex>
      <v-flex class="error" xs6>
        <h1>Columna de 6</h1>
      </v-flex>
      <v-flex class="warning" xs3>
        <h1>Columna de 3</h1>
        <v-card>
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Application
                </v-list-item-title>
                <v-list-item-subtitle>
                  subtext
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list dense nav>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>asd</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

export default {

};
</script>
