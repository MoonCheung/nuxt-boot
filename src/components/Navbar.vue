<template>
  <div class="header"
       :class="{ active: isActive }"
       @scroll.native="toFixedHeader">
    <b-container>
      <b-navbar class="navbar-inverse"
                toggleable="lg"
                variant="faded"
                type="light">
        <b-navbar-brand href="#"
                        class="navbar-brand scroll-top">
          <!-- logo 图标 -->
          <div class="logo"></div>
        </b-navbar-brand>
        <b-navbar-toggle class="my-navbar-toggle"
                         target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse"
                    is-nav>
          <b-navbar-nav class="ml-auto">
            <li><a href="#"
                 class="scroll-top">Home</a></li>
            <li><a href="#about"
                 class="scroll-link">About Us</a></li>
            <li><a href="#portfolio"
                 class="scroll-link">Portfolio</a></li>
            <li><a href="#blog"
                 class="scroll-link">Blog</a></li>
            <li><a href="#contact"
                 class="scroll-link">Contact Us</a></li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    isActive: false
  }),
  mounted () {
    /// 监听滚动事件
    window.addEventListener('scroll', this.toFixedHeader, true);
  },
  methods: {
    toFixedHeader () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 100) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    }
  }
}
</script>

<style>
</style>
