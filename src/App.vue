<template>
  <div>
    <HomePage v-if="$route.path === '/'" />
    <router-view />
  </div>
  <Toast />
  <ConfirmDialog />
</template>
<script>
import HomePage from "./view/HomePage.vue";
import RisterLandlord from "./components/register/LandlordView.vue";
export default {
  components: {
    HomePage,
    RisterLandlord
  }
}
</script>