<template>
  <div class="container">
    <p>About {{name}} Page</p>
    <p>It should take 1 seconds for the loader to disappear</p>
    <p>
      It should take 1 seconds for the route to change after you
      <span class="link"
            @click="goToFinal">
        click here
      </span>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  loading: false,
  asyncData ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  // 该组件渲染完成之后挂载
  mounted () {
    setTimeout(() => {
      this.$nuxt.$loading.finish()
    }, 1000)
  },
  // 该方法被混入vue实例中
  methods: {
    goToFinal () {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$router.push('/final')
      }, 1000)
    }
  }
}
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: underline;
}
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
