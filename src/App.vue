<template>
  <div>
    <Navbar />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
});
</script>

<style lang="scss">
$DarkBlue: hsl(209, 23%, 22%);
$VeryDarkBlue: hsl(207, 26%, 17%);
$VeryDarkBlue: hsl(200, 15%, 8%);
$DarkGray: hsl(0, 0%, 52%);
$VeryLightGray: hsl(0, 0%, 98%);
$White: hsl(0, 0%, 100%);

* {
  padding: 0;
  margin: 0;
  font-family: "Nunito Sans Variable", sans-serif;
  background-color: $DarkBlue;
  color: $White;
}

#input,
#input::placeholder,
#btn,
#select,
#select::placeholder {
  background-color: $DarkBlue;
  color: $White;
}


.homepage {
  font-size: 14px;
}
</style>
