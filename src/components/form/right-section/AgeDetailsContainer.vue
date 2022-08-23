<template>
  <div class="age-details-container d-flex align-center">
    <v-menu
      class="dob-menu"
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
      <div>
      <label>Date of Birth*</label>
        <v-text-field
          v-model="date"
          label="Date of Birth"
          class="dob-picker"
          prepend-icon="mdi-calendar-multiselect-outline"
          @change="ageEdit"
          readonly
          v-bind="attrs"
          v-on="on"
          solo
        ></v-text-field>
        </div>
      </template>
      <v-date-picker
        v-model="date"
        @change="ageEdit"
        @input="menu2 = false"
      ></v-date-picker>
    </v-menu>
    <div class="dob-details">
      <p class="mb-0">Age: <span>{{ ageCalc }}</span></p>
      <v-chip v-if="adultCheck >= 18" outlined>Adult 18+</v-chip>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
   name:'AgeDetailsContainer',
})

export default class AgeDetailsContainer extends Vue{
  date =  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10) as string;
  menu2 = false as boolean;
  ageEdit():void {
      this.$emit("ageEdit", this.date);
    }
  
  get ageCalc():string {
      return moment(this.date.split("-").join(""), "YYYYMMDD").fromNow().split(' ')[1][0] === 'y' ? moment(this.date.split("-").join(""), "YYYYMMDD").fromNow().split(' ')[0] + 'y':'Enter Proper date';
  }

  get adultCheck():number {
      return moment().diff(this.date, "years");
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');


label {
  font-family:'Inter';
  font-size:12px;
  color:var(--secondary);
}
.dob-picker {
  flex: unset;
  border:1px solid var(--primary-border);
  width:313px;
}
.dob-picker :deep(.v-input__slot) {
  width: 250px;
  box-shadow:none !important;
}

.dob-picker :deep(.v-input__prepend-outer) {
  margin-left: 11px;
}



.dob-picker :deep(.v-input__control) {
  height:48px;
}

.dob-picker :deep(.v-icon) {
  color:var(--primary);
}

.dob-details {
  width: 100%;
  height:74px;
  align-items:center;
  display: flex;
  justify-content: space-around;
}

.dob-details p {
  font-family:'Inter';
  font-weight:500;
  font-size:12px;
}

.dob-details p span {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #71717A;
}

.dob-details :deep(.v-chip .v-chip__content) {
  font-size:12px;
  font-weight:400;
  font-family:'Poppins',sans-serif;
  color:#000000;
}
</style>
