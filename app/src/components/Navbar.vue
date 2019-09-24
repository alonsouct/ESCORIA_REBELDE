<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <b-img rounded alt="Logo" src="..\assets\logo.png" height="50" width="50"></b-img>
    </b-navbar-brand>
    <div>
      <b-form-input value="Filename.json"></b-form-input>
    </div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-button-group>
          <b-nav-item-dropdown text="File" right>
            <b-dropdown-item href="#">New</b-dropdown-item>
            <b-dropdown-item href="#">Open from</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Save</b-dropdown-item>
            <b-dropdown-item href="#">Save as...</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">Import</b-dropdown-item>
            <b-dropdown-item href="#">Export</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
          <b-nav-item :to="{name: 'about'}">About</b-nav-item>
        </b-button-group>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>