<template>
  <div class="home d-flex justify-center align-center">
    <v-btn @click="login" class="home__login-btn" outlined
      ><googleIcon class="mr-2" />Register with Google</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import logoutMixin from "../mixins/logoutMixin";
import googleIcon from "@/assets/icons/googleIcon.vue";

@Component({
  name: "HomeView",
  components: {
    googleIcon,
  },
})
export default class HomeView extends Vue {
  logout!: Event;
  login() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((result) => {
        this.$cookies.set("userLoggedIn", true);
        this.$router.push("/form");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap");

.home {
  height: 100%;
}

.home__login-btn {
  color: var(--primary);
  border: 1px solid var(--primary);
  width: 440px;
  height: 48px !important;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: normal;
}
</style>
