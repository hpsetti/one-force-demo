<template>
  <div class="form">
    <form
      @submit.prevent="onFormSubmit"
      class="form__container d-flex justify-space-between"
    >
      <div class="form__left-section">
        <v-avatar color="primary" size="313">
          <span class="white--text text-h1">{{displayName}}</span>
        </v-avatar>
      </div>
      <div class="form__right-section">
        <Nav />
        <div class="right-section__form-area-container mt-10">
          <NameContainer @nameEdit="nameChange" />
          <ContactDetailsContainer @contactEdit="contactChange" />
          <AgeDetailsContainer @ageEdit="ageChange" />
          <GenderDetailsContainer @genderEdit="genderChange" />
          <BioDetailsContainer @bioEdit="bioChange" />
          <LocationDetailsContainer @locationEdit="locationChange" />
        </div>
        <v-btn class="form__submit" type="submit">Save</v-btn>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";

import Nav from "../components/form/right-section/Nav.vue";
import NameContainer from "../components/form/right-section/NameContainer.vue";
import ContactDetailsContainer from "../components/form/right-section/ContactDetailsContainer.vue";
import AgeDetailsContainer from "../components/form/right-section/AgeDetailsContainer.vue";
import GenderDetailsContainer from "../components/form/right-section/GenderDetailsContainer.vue";
import BioDetailsContainer from "../components/form/right-section/BioDetailsContainer.vue";
import LocationDetailsContainer from "../components/form/right-section/LocationDetailsContainer.vue";

@Component({
  name: "FormView",
  components: {
    Nav,
    NameContainer,
    ContactDetailsContainer,
    AgeDetailsContainer,
    GenderDetailsContainer,
    BioDetailsContainer,
    LocationDetailsContainer,
  },
})
export default class FormView extends Vue {
  displayName = '' as string
  firstName = '' as string
  lastName = '' as string
  date = '' as string|object
  userEmail = '' as string
  userPhoneNumber = '' as string|number
  bioData = '' as string
  country = '' as string
  state = '' as string
  zip = '' as string|number
  gender = '' as string

  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.displayName = user.displayName[0];
      } else {
        console.log('error')
      }
    });
  }


  async onFormSubmit(event:Event) {
      event.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: this.firstName,
          last: this.lastName,
          born: this.date,
          email: this.userEmail,
          phone: this.userPhoneNumber,
          bio: this.bioData,
          country: this.country,
          state: this.state,
          zip: this.zip,
          gender: this.gender,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    nameChange(e:string) {
      this.firstName = e[0];
      this.lastName = e[1];
    }

    contactChange(e:string) {
      this.userEmail = e[0];
      this.userPhoneNumber = e[1];
    }
    ageChange(e: string) {
      this.date = e;
    }
    genderChange(e: string) {
      this.gender = e;
    }
    bioChange(e: string) {
      this.bioData = e;
    }
    locationChange(e: string) {
      this.country = e[0];
      this.state = e[1];
      this.zip = e[2];
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

.form {
  height: 100%;
}

.form__container {
  width: 1198px;
  max-width: 100%;
  margin-top: 75px;
}

.form__right-section {
  width: 100%;
  margin-left: 131px;
}

.form__left-section {
  width: 313px;
  margin-left: 108px;
}

.form__submit {
  height: 28px !important;
  width: 148px !important;
  background-color: var(--primary) !important;
  color: #ffffff;
  text-transform: none;
  font-family: "Poppins", sans-serif;
  letter-spacing: normal;
}
</style>
