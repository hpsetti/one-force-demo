<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

:root {
  --primary:#205EFF;
  --secondary:#3B3B3B;
  --danger:#DC2626;
  --primary-border:#E4E4E4;
}
</style>
