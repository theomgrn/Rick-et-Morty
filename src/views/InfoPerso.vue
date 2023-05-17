

<style>
.card_perso {
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
}
.card_perso img {
  width: 300px;
  height: 300px;
}
</style>

<template>
  <div class="card_perso">
    <div>
      <img :src="data.image" alt="" />
      <h1>{{ data.name }}</h1>
    </div>
    <p>
      Genre : <span>{{ data.gender }}</span>
    </p>
    <p>
      Race : <span>{{ data.species }}</span>
    </p>
    <p>
      Status : <span>{{ data.status }}</span>
    </p>
    <p>
      Type : <span>{{ data.type ? data.type : 'unknown'  }}</span>
    </p>

     <h4>Episodes avec le personnage :</h4>
    <ul>
      <li v-for="url in data.episode" :key="url">
        <router-link :to="'/infoepisode/' + EpisodeNumber(url)">
          Episode {{ EpisodeNumber(url) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const persoId = route.params.id;
let data = ref("");

onMounted(async () => {
  const response = await axios.get(
    "https://rickandmortyapi.com/api/character/" + persoId
  );
  data.value = response.data;
});

function EpisodeNumber(url) {
  return url.substring(url.lastIndexOf("/") + 1);
}

</script>