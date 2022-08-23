<template>
    <div class="right-section__nav d-flex">
          <h3 class="nav__general-info-header pb-1">General Information</h3>
          <v-btn plain class="nav__logout ml-8"
            @click="logout">Log out <logoutIcon class="ml-1"/></v-btn
          >
        </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import logoutMixin from "../../../mixins/logoutMixin"
import logoutIcon from "@/assets/icons/logoutIcon.vue"

@Component({
   name:'navContainer',
    mixins:[logoutMixin],
    components: {
        logoutIcon
    }
})
export default class Nav extends Vue{
 logout!: Event;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

.nav__general-info-header {
  color: var(--primary);
  text-transform: uppercase;
  border-bottom: 2px solid var(--primary);
  font-family:'Poppins',sans-serif;
  font-size: 14px;
  letter-spacing: 0.1em;
  font-weight: 700;
  line-height: 21px;
}

.nav__logout {
  color: var(--danger);
  font-family:'Poppins',sans-serif;
  font-weight: 500;
  font-size:12px;
  text-transform: initial;
  height:19px !important;
}

</style>