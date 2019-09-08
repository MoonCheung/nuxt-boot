<template>
  <div class="container">
    <p>Hello {{name}}</p>
    <nuxt-link to="/">
      Go to /
    </nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: '返回首页' })
      }, 1000)
    })
  }
}
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
