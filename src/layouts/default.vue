<template>
  <div>
    <v-navbar />
    <nuxt />
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
};
</script>
