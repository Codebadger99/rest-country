<template>
  <div class="homepage">
    <!-- Filter Begins -->
    <div
      class="d-flex align-items-center justify-content-around mt-5"
      id="flex"
    >
      <input
        class="form-control form-control-lg w-75 shadow-sm"
        type="text"
        id="input"
        placeholder="Search For a country"
        aria-label=".form-control-lg example"
        v-model="input"
      />
      <select
        class="form-select form-select-lg w-auto shadow-sm"
        aria-label=".form-select-lg example"
        v-model="option"
        id="select"
        aria-placeholder="Filter By Region"
      >
        <option selected value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <!-- Filter Ends -->

    <!-- Country Card Begins -->
    <div v-if="country.length">
      <div class="container">
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 mt-4 mx-auto"
        >
          <div v-for="countries in FilterCountry" :key="countries">
            <div class="col">
              <router-link
                :to="{ name: 'homeDetail', params: { name: countries.name } }"
              >
                <div class="card w-100 rounded">
                  <img
                    :src="countries.flag"
                    class="card-img-top"
                    :alt="countries.name"
                  />
                  <div class="card-body">
                    <h5 class="card-title text-white">{{ countries.name }}</h5>
                    <p class="card-text">
                      Population: {{ countries.population }}
                    </p>
                    <p class="card-text">Region: {{ countries.region }}</p>
                    <p class="card-text">Capital: {{ countries.capital }}</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <Spinner />
    </div>

    <!-- Country Card Ends -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import countries from "@/types/country";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  components: { Spinner },
  data() {
    return {
      country: [] as countries[],
      input: "" as string,
      option: "",
    };
  },
  mounted() {
    try {
      axios
        .get<countries[]>("https://restcountries.com/v2/all")
        .then((data) => {
          console.log(data.data);
          const country = data.data;
          this.country = country;
        });
    } catch (error) {
      console.log(error);
    }
  },

  computed: {
    FilterCountry(): countries[] {
      let filtered = this.country.filter((country) =>
        country.name.toUpperCase().includes(this.input.toUpperCase())
      );

      if (this.option) {
        filtered = this.country.filter(
          (country) => country.region === this.option
        );
      }
      return filtered;
    },
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.world {
  font-weight: 800;
}

.mode {
  font-weight: 600;
}

.form-select-lg,
.form-control-lg {
  font-size: 14px;
}

.row {
  align-items: center;
  justify-content: center;
}

a {
  text-decoration: none;
}

@media screen and (max-width: 425px){
  #flex{
    flex-direction: column;
    gap: 1rem;
  }

 
}
</style>
