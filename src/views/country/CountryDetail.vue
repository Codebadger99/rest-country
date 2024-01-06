<template>
  <div class="container h-100" id="Detail">
    <button type="button" class="btn btn-light mt-5 d-flex gap-2  align-items-center justify-content-center" @click="goBack" id="btn">
     <i class="fa-solid fa-arrow-left"></i>Back
    </button>
    <div v-if="countryDetail.length">
      <div class="mt-5">
        <div v-for="detail in countryDetail" :key="detail">
          <div
            class="d-flex align-items-center justify-content-around"
            id="info"
          >
            <div>
              <img
                :src="detail.flag"
                :alt="detail.name"
                class="w-75 img-fluid"
              />
            </div>
            <div class="info-5 w-50">
              <h3 class="country">{{ detail.name }}</h3>
              <div class="d-flex gap-3" id="info-2">
                <div>
                  <p>
                    Native Name: <span>{{ detail.nativeName }}</span>
                  </p>
                  <p>
                    Population: <span>{{ detail.population }}</span>
                  </p>
                  <p>
                    Region: <span>{{ detail.region }}</span>
                  </p>
                  <p>
                    Sub Region: <span>{{ detail.subregion }}</span>
                  </p>
                  <p>
                    Capital: <span>{{ detail.capital }}</span>
                  </p>
                </div>
                <div>
                  <!-- <p>Top Level Domain: <span>{{detail.topleveldomain[0]}}</span></p> -->
                  <p>
                    Curriencies: <span>{{ detail.currencies[0].name }}</span>
                  </p>
                  <p>
                    Languages: <span>{{ detail.languages[0].name }}</span>
                  </p>
                </div>
              </div>
              <!-- <div>
              <p class="d-flex gap-3 align-items-center" id="info-3">
                Border Countries:
      
                <span class="border border-3 px-3 text-center">{{detail.border}}</span> -->
              <!-- <span class="border border-3 px-3">Germany</span>
                <span class="border border-3 px-3">NetherLands</span> -->
              <!-- </p>
            </div>  -->
            </div>
          </div>
        </div>
      </div>
    </div>
      <div v-else>
        <Spinner />
      </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import countryDetail from "@/types/countryDetail";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
  props: {
    name: {
      required: true,
      // type: Array as PropType<countries[]>,
    },
  },
  components: { Spinner },

  data() {
    return {
      countryDetail: [] as countryDetail[],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    try {
      axios
        .get<countryDetail[]>(`https://restcountries.com/v2/name/${this.name}`)
        .then((data) => {
          console.log(data.data);
          const country = data.data;
          this.countryDetail = country;
        });
    } catch (error) {
      console.log(error);
    }
  },
  computed: {},
});
</script>
<style lang="scss" scoped>
#Detail {
  font-size: 16px;
}

h3,
p {
  font-weight: 800;
}

span {
  font-weight: 600;
}

@media screen and (max-width: 800px) {
  #info {
    flex-direction: column;
  }

  #info-2 {
    flex-direction: column;
  }

  #info-3 {
    flex-direction: column;
  }

  .country {
    text-align: left;
  }

  .info-5 {
    margin-top: 3rem;
  }
}
</style>
