<style>
.galery_card {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}
.center {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.card {
  display: flex;
  width: 300px;
  flex-direction: column;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
}
.card img {
  width: 100%;
  height: auto;
}
.filtres {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.mr-top {
  margin-top: 2rem;
}
</style>

<template>
  <main>
    <h3>RICK & MORTY</h3>
    <h3>EPISODES</h3>
    <div>
      <div class="center">
        <label for="search">Rechercher par nom :</label>
        <input
          placeholder="Ricksy Business"
          @keyup="searchQuery = $event.target.value"
        />
        <input value="Rechercher" type="submit" @click="fetchEpisodes" />
      </div>
    </div>
    <div class="filtres mr-top">
      <button @click="prevPage">Précédent</button>
      <button @click="nextPage">Suivant</button>
    </div>
    <div class="galery_card">
      <div v-if="!data.length">
        <p>Chargement...</p>
      </div>
      <CardEpisode
        class="card"
        v-for="(episode, index) in data"
        :key="index"
        :name="episode.name"
        :episode="episode.episode"
        :air_date="episode.air_date"
        :id="episode.id"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CardEpisode from "../components/CardEpisode.vue";

const data = ref([]);
let page = ref(1);
let searchQuery = ref("");
let filter = ref("");

async function fetchEpisodes() {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/episode?name=" +
        searchQuery.value +
        "&gender=" +
        filter.value +
        "&page=" +
        page.value
    );
    data.value = response.data.results;
  } catch (error) {
    console.error(error);
  }
}
onMounted(fetchEpisodes);

function prevPage() {
  if (page.value > 1) {
    page.value--;
    fetchEpisodes();
  }
  if (page.value === 1) {
    page.value = 1;
  }
}

function nextPage() {
  if (page.value ) {
    page.value++;
    fetchEpisodes();
  }
}
</script>
