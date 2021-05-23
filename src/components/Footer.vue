<template>
  <footer>
    <b-container>
      <b-row>
        <b-col md="6">
          <div class="copyright-text">
            <p>
              Copyright &copy; 2017 Company Name - Design:
              <a href="http://www.tooplate.com" target="_parent">MoonCheung</a>
            </p>
          </div>
        </b-col>
        <b-col md="6">
          <div class="social-icons">
            <ul>
              <li>
                <a href="#"
                  ><i> <font-awesome-icon :icon="['fab', 'facebook-f']"/></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i> <font-awesome-icon :icon="['fab', 'twitter']"/></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i> <font-awesome-icon :icon="['fab', 'linkedin-in']"/></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i> <font-awesome-icon :icon="['fa', 'rss']" /> </i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i> <font-awesome-icon :icon="['fab', 'dribbble']" /> </i
                ></a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style></style>
