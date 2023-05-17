<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link class="link-nav-main" to="/"
          ><img src="./assets/logo.png" alt="logo"
        /></router-link>
        <router-link class="link-nav-main" to="/">Episodes</router-link>
        <router-link class="link-nav-main" to="/locations">Locations</router-link>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
h1,
h3 {
  text-align: center;
}
nav {
  margin-top: 10px;
  margin-left: 100px;
}
nav img {
  position: absolute;
  width: 60px;
  top: 20px;
  left: 30px;
}
</style>
