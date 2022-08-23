<template>
  <div class="gender-details-container mt-5">
    <p class="gender-details-container__header mb-3">Select your gender</p>
    <v-radio-group v-model="gender" @change="genderEdit" row mandatory>
      <v-radio label="Male" value="male" selected></v-radio>
      <v-radio label="Female" value="female"></v-radio>
      <v-radio label="Other" value="other"></v-radio>
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
   name:'GenderContainer',
})

export default class GenderContainer extends Vue{
  gender = '' as string;

  genderEdit():void {
      this.$emit("genderEdit", this.gender);
    }
}
</script>

<style scoped>
.gender-details-container__header {
    font-family:'Inter';
    font-size:12px;
    color:var(--secondary);
    font-weight:400;
}

:deep(.v-input) {
    margin-top:0px;
}
:deep(.v-input .v-icon), :deep(.v-input .v-label) {
    font-size:14px;
}

:deep(.v-input .v-label) {
    font-family:'Inter';
    color:var(--secondary);
    font-weight:500;
}
</style>
