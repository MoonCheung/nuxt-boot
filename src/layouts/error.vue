<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      网页未找到
    </h1>
    <h1 v-else>
      发生错误
    </h1>
    <nuxt-link to="/">主页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>
