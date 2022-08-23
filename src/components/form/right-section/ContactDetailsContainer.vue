<template>
  <div class="contact-details-container d-flex">
    <div class="contact-details-container__email-container">
      <label>Email Address*</label>
      <v-text-field
        solo
        label="Email Address"
        v-model="userEmail"
        prepend-inner-icon="mdi-email-outline"
        :rules="[
      () => !!userEmail || 'E-mail is required',
      () => /.+@.+/.test(userEmail) || 'E-mail must be valid',
    ]"
        class="email-input mr-5"
        @change="contactEdit"
      ></v-text-field>
    </div>
    
    <div class="contact-details-container__phone-container">
      <label>Phone Number*</label>
    <v-text-field
      solo
      label="Phone Number"
      v-model="userPhoneNumber"
      :rules="[() => !!userPhoneNumber || 'This field is required']"
      prepend-inner-icon="mdi-phone"
      class="phone-input"
      @change="contactEdit"
    ></v-text-field>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
   name:'ContactDetailsContainer',
    
})

export default class ContactDetailsContainer extends Vue{
  userEmail = '' as string;
  userPhoneNumber = '' as string|number

  contactEdit():void {
      this.$emit("contactEdit", [this.userEmail, this.userPhoneNumber]);
    }
}
</script>

<style scoped>

label {
  font-family:'Inter';
  font-size:12px;
  color:#3B3B3B;
}

.email-input,
.phone-input {
  flex: unset;
}
.email-input :deep(.v-input__slot),
.phone-input :deep(.v-input__slot) {
  width: 313px;
  box-shadow:none !important;
  border:1px solid var(--primary-border);
}

.email-input :deep(.v-text-field__slot),
.phone-input :deep(.v-text-field__slot) {
  color:var(--secondary);
  font-family:'Inter';
  font-size:14px;
}

.email-input :deep(.v-icon),
.phone-input :deep(.v-icon) {
  color:var(--primary);
}
</style>
