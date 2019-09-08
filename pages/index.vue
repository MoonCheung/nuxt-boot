<template>
  <div class="container">
    <p>
      <span>Hello {{name}}</span>
    </p>
    <nuxt-link to="/about">
      Go to /about
    </nuxt-link>
    <br />
    <nuxt-link to="/slug">
      Go to /slug
    </nuxt-link>
    <ul class="users">
      <li v-for="user in users"
          :key="user.id">
        <nuxt-link :to="'/users/'+user.id">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    name: 'Nuxt.js'
  }),
  async asyncData () {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      users: data
    }
  }
}
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
.users {
  list-style-type: none;
}
.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
