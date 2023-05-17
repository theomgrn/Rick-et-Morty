<style>
.infoCenter {
  text-align: center;
  display: flex;
  justify-content: center;;
  flex-direction: column;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>

<template>
  <div>
    <div>
      <h3>Dans l'épisode : {{ data.name }}</h3>
    </div>
    <div class="infoCenter">
      <h4>Les personnages présent : </h4> 
      <ul>
        <li v-for="url in data.characters" :key="url">
          <router-link :to="'/infoperso/' + EpisodeNumber(url)">
            Personnage {{ EpisodeNumber(url) }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const route = useRoute();
const episodeId = route.params.id;
let data = ref("");

onMounted(async () => {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/episode/" + episodeId
  );
  data.value = response.data;
});

function EpisodeNumber(url) {
  return url.substring(url.lastIndexOf("/") + 1);
}



</script>