<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </b-container>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
          <b-nav-item :to="{name: 'about'}">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
    <router-view/>
  </div>
</template>