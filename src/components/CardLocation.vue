<script setup>
defineProps(["name", "dimension", "type", "id"]);
</script>

<template>
  <div class="card">
    <h1>{{ name }}</h1>
    <p>Type : {{ type }}</p>
    <p>Dimension : {{ dimension }}</p>
  </div>
</template>
<style setup>

</style>
