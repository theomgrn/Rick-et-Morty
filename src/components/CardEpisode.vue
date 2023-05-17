<script setup>
defineProps(["name", "episode", "air_date", "id"]);
</script>

<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <p>Episode : {{ episode }}</p>
    <p>Date de diffusion : {{ air_date }}</p>
    <router-link :to="'/infoepisode/' + id"
      >Plus d'info</router-link
    >
  </div>
</template>
<style setup>

</style>
