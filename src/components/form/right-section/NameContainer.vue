<template>
  <div class="name-container d-flex">
    <div class="name-container__first-name-container">
      <label>First Name*</label>
      <v-text-field
        label="First name"
        placeholder="First Name"
        v-model="firstName"
        :rules="[() => !!firstName || 'This field is required']"
        class="first-name-input mr-5"
        @change="nameEdit"
        solo
      ></v-text-field>
    </div>
    <div class="name-container__last-name-container">
      <label>Last Name*</label>
      <v-text-field
      label="Last name"
      v-model="lastName"
      :rules="[() => !!lastName || 'This field is required']"
      placeholder="Last Name"
      class="last-name-input"
      @change="nameEdit"
      solo
    ></v-text-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
   name:'nameContainer',
    
})
export default class nameContainer extends Vue{
  firstName= '' as string;
  lastName='' as string;

  nameEdit():void {
      this.$emit("nameEdit", [this.firstName, this.lastName]);
    }
}
</script>

<style scoped>

label {
  font-family:'Inter';
  font-size:12px;
  color:var(--secondary);
}

.first-name-input,
.last-name-input {
  flex: unset;
}

.first-name-input :deep(.v-input__slot),
.last-name-input :deep(.v-input__slot) {
  width: 313px;
  box-shadow:none !important;
  border:1px solid var(--primary-border);
}

.first-name-input :deep(.v-text-field__slot),
.last-name-input :deep(.v-text-field__slot) {
  color:var(--secondary);
  font-family:'Inter';
  font-size:14px;
}
</style>
