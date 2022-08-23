<template>
  <div class="bio-details-container">
    <p class="bio-details-container__header">About Me</p>
    <v-textarea
      name="input-7-4"
      label="About me"
      value=""
      v-model="bioData"
      @change="bioEdit"
      class="bio-details"
      solo
    ></v-textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
   name:'BioDetailsContainer',
})

export default class BioDetailsContainer extends Vue{
  bioData = '' as string

  bioEdit():void {
      this.$emit("bioEdit", this.bioData);
    }
}
</script>

<style scoped>
.bio-details-container__header {
    font-family:'Inter';
    font-size:12px;
    color:var(--secondary);
}

.bio-details :deep(.v-input__slot) {
    box-shadow:none !important;
    border:1px solid var(--primary-border);
}
</style>
