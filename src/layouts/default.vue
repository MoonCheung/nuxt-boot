<template>
  <div>
    <v-navbar />
    <router-view />
    <v-footer />
  </div>
</template>

<script>
import VNavbar from '@/components/Navbar';
import VFooter from '@/components/Footer';

export default {
  components: {
    VNavbar,
    VFooter
  }
}
</script>
