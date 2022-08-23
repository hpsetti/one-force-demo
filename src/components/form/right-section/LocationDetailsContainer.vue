<template>
  <div class="location-details-container d-flex justify-space-between">
    <div class="location-details-container__country-container">
      <label>Country*</label>
      <v-autocomplete
        ref="country"
        v-model="country"
        :rules="[() => !!country || 'This field is required']"
        :items="countries"
        label="Country"
        placeholder="Select..."
        @change="locationEdit"
        class="country-input"
        required
        solo
      ></v-autocomplete>
    </div>

    <div class="location-details-container__state-container">
      <label>State*</label>
      <v-text-field
        ref="state"
        v-model="state"
        :rules="[() => !!state || 'This field is required']"
        label="State"
        @change="locationEdit"
        class="state-input"
        required
        placeholder="TX"
        solo
      ></v-text-field>
    </div>

    <div class="location-details-container__zip-container">
      <label>Zip*</label>
      <v-text-field
        ref="zip"
        v-model="zip"
        :rules="[() => !!zip || 'This field is required']"
        label="ZIP / Postal Code"
        required
        @change="locationEdit"
        class="zip-input"
        placeholder="79938"
        solo
      ></v-text-field>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
   name:'LocationDetailsContainer',
})
export default class LocationDetailsContainer extends Vue{
  countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antigua &amp; Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia",
      "Bosnia &amp; Herzegovina",
      "Botswana",
      "Brazil",
      "British Virgin Islands",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Cape Verde",
      "Cayman Islands",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Congo",
      "Cook Islands",
      "Costa Rica",
      "Cote D Ivoire",
      "Croatia",
      "Cruise Ship",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Polynesia",
      "French West Indies",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kuwait",
      "Kyrgyz Republic",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macau",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Namibia",
      "Nepal",
      "Netherlands",
      "Netherlands Antilles",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palestine",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Reunion",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Pierre &amp; Miquelon",
      "Samoa",
      "San Marino",
      "Satellite",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "South Africa",
      "South Korea",
      "Spain",
      "Sri Lanka",
      "St Kitts &amp; Nevis",
      "St Lucia",
      "St Vincent",
      "St. Lucia",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      `Timor L'Este`,
      "Togo",
      "Tonga",
      "Trinidad &amp; Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks &amp; Caicos",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Venezuela",
      "Vietnam",
      "Virgin Islands (US)",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ] as string[];
    zip='' as string|number;
    country='' as string;
    state='' as string;

    locationEdit():void {
      this.$emit("locationEdit", [this.country, this.state, this.zip]);
    }
}
</script>

<style scoped>
label {
  font-family: "Inter";
  font-size: 12px;
  color: var(--secondary);
}
.country-input :deep(.v-input__slot),
.state-input :deep(.v-input__slot),
.zip-input :deep(.v-input__slot) {
  width: 202px;
  box-shadow: none !important;
  border: 1px solid var(--primary-border);
  padding: 4px;
}

.country-input :deep(.v-input__slot)::before,
.state-input :deep(.v-input__slot)::before,
.zip-input :deep(.v-input__slot)::before {
  border: none;
}
</style>
