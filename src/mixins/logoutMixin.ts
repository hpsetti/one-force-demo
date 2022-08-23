import { getAuth, signOut } from "firebase/auth";
import Vue from 'vue'
import VueCookies from "vue-cookies"

Vue.use(VueCookies);

export default {
    methods: {
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
              console.log("signed out")
                Vue.$cookies.set('userLoggedIn', false);
                window.location.hash="#/"
        
            }).catch((error) => {
              console.log('error',error)
            })
          }
    }
}
