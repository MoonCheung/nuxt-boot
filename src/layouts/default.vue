<template>
  <div class="container">
    <navbar />
    <nuxt />
    <footers />
  </div>
</template>

<script>
import navbar from '@/components/Navbar';
import footers from '@/components/Footer';

export default {
  components: {
    navbar,
    footers
  }
}
</script>
