<style>
.galery_card {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
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
.filtre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 5px;
}
.mr-top {
  margin-top: 2rem;
}
</style>

<template>
  <main>
    <h3>RICK & MORTY</h3>
    <h3>LOCATIONS</h3>
    <div>
      <div class="filtres">
        <div class="filtre">
          <label for="search">Rechercher par nom :</label>
          <input
            id="search"
            name="search"
            type="text"
            placeholder="Earth (C-137)"
            @keyup="searchQuery = $event.target.value"
          />
          <input
            class="submit"
            type="submit"
            value="Rechercher"
            @click="fetchEpisodes"
          />
        </div>
        <div class="filtre">
          <label for="search">Rechercher par type :</label>
          <select @change="filter = $event.target.value">
            <option value="">Tous</option>
            <option value="Planet">Planet</option>
            <option value="Cluster">Cluster</option>
            <option value="Space station">Space station</option>
            <option value="TV">TV</option>
            <option value="Microverse">Microverse</option>
            <option value="Resort">Resort</option>
            <option value="Fantasy town">Fantasy town</option>
            <option value="Dream">Dream</option>
          </select>
          <input
            class="submit"
            type="submit"
            value="Filtrer"
            @click="fetchEpisodes"
          />
        </div>
      </div>
    </div>
    <div class="filtres mr-top">
      <button @click="prevPage" class="prev">Précédent</button>
      <button @click="nextPage" class="next">Suivant</button>
    </div>
    <div class="galery_card">
      <div v-if="!data.length">
        <p>Chargement...</p>
      </div>
      <CardLocation
        v-for="(location, index) in data"
        :key="index"
        :name="location.name"
        :dimension="location.dimension"
        :type="location.type"
        :id="location.id"
      />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import CardLocation from "../components/CardLocation.vue";

const data = ref([]);
let page = ref(1);
let searchQuery = ref("");
let filter = ref("");

async function fetchEpisodes() {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location?name=" +
        searchQuery.value +
        "&type=" +
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
  page.value++;
  fetchEpisodes();
}
</script>
