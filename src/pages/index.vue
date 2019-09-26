<template>
  <div>
    <section class="my-hero">
      <b-carousel v-model="slide"
                  :interval="4000"
                  indicators
                  class="my-hero-slider"
                  @sliding-start="onSlideStart"
                  @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide img-src="../assets/img/slide_01.jpg">
          <span>Introduction to</span>
          <h2>Creative Meteor</h2>
          <p>Phasellus interdum tortor sem. Quisque sit amet condimentum sem. Phasellus luctus, felis sit amet
            pulvinar luctus.</p>
          <div class="primary-button">
            <a href="#"
               class="scroll-link">Discover More</a>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="../assets/img/slide_02.jpg">
          <span>We Are Perfect Staffs</span>
          <h2>Our Team Members</h2>
          <p>Donec dolor ipsum, laoreet nec metus non, tempus elementum massa. Donec non elit rhoncus, vestibulum enim
            sed, rutrum arcu.</p>
          <div class="primary-button">
            <a href="#">Read More</a>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-src="../assets/img/slide_03.jpg">
          <span>Design is a hobby</span>
          <h2>Responsive Layout</h2>
          <p>Integer ut dolor eget magna congue gravida ut at arcu. Vivamus maximus neque quis luctus tempus.
            Vestibulum consequat.</p>
          <div class="primary-button">
            <a href="#">View Details</a>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </section>

    <div id="about"
         class="page-section">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="section-heading">
              <h4>What We Do</h4>
              <div class="line-dec"></div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="service-item first-service">
              <div class="icon"></div>
              <h4>Easy Customizations</h4>
              <p>Meteor is free HTML website template by Tooplate. Feel free to use this layout for your project.</p>
            </div>
          </b-col>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="service-item second-service">
              <div class="icon"></div>
              <h4>Creative Ideas</h4>
              <p>Biodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke, typewriter.</p>
            </div>
          </b-col>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="service-item third-service">
              <div class="icon"></div>
              <h4>Good Profit</h4>
              <p>Biodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke, typewriter.</p>
            </div>
          </b-col>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="service-item fourth-service">
              <div class="icon"></div>
              <h4>Open To Public</h4>
              <p>Biodiesel schltz suculents phone cliche ramps snackwave coloring book tumeric poke, typewriter.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="what-we-do">
      <b-container>
        <b-row>
          <b-col md="6">
            <div class="left-text">
              <h4>New offers just arrived,<br>Get it now and take profit.</h4>
              <p>Gochujang pitchfork post-ironic hammock kombucha fanny pack cronut. Raw denim chicharrones semiotics af
                truffaut pinterest. Distillery letterpress authentic adaptogen. Meditation schlitz humblebrag photo booth
                celiac cliche chartreuse.<br><br>Pinterest 90's wolf celiac dreamcatcher listicle deep v semiotics.
                Intelligentsia literally meggings trust fund put a bird on it. Shoreditch crucifix artisan pug shaman
                twee. Health goth bicycle rights retro iPhone.</p>
              <ul>
                <li>
                  <div class="white-button">
                    <a href="#"
                       class="scroll-link"
                       data-id="portfolio">Discover More</a>
                  </div>
                </li>
                <li>
                  <div class="primary-button">
                    <a href="#">Purchase Now</a>
                  </div>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col md="6">
            <div class="right-image">
              <b-img src="../assets/img/what-we-do-right-image.png"
                     alt="图像"
                     fluid></b-img>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="portfolio"
         class="page-section">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="section-heading">
              <h4>Our Portfolio</h4>
              <div class="line-dec"></div>
            </div>
          </b-col>
        </b-row>
        <div class="filter-categories">
          <b-tabs content-class="mt-3"
                  align="center">
            <b-tab title="All"
                   active>
              <b-row>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_01.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" /></i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_02.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_03.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i>
                      </a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_04.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_05.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_06.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_07.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i>
                      </a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_08.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i>
                      </a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Nature">
              <b-row>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_05.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Workspace">
              <b-row>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_01.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_02.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_08.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="City">
              <b-row>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_08.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_04.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-tab>
            <b-tab title="Technology">
              <b-row>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_05.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
                <b-col md="3"
                       sm="6"
                       class="project-item">
                  <div class="thumb">
                    <div class="image">
                      <b-img src="../assets/img/portfolio_07.jpg"
                             fluid></b-img>
                    </div>
                    <div class="hover-effect">
                      <a href="#">
                        <i>
                          <font-awesome-icon icon="search"
                                             size="lg" />
                        </i></a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-tab>
          </b-tabs>
        </div>
      </b-container>
    </div>

    <div id="blog"
         class="page-section">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="section-heading">
              <h4>Our Blog Posts</h4>
              <div class="line-dec"></div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="blog-item b1">
              <div class="thumb">
                <b-img src="../assets/img/blog_01.jpg"
                       alt="图像"
                       fluid></b-img>
                <div class="text-content">
                  <h4>Delecioius Food Served</h4>
                  <span>Posted: <em>George</em> / Date: <em>11 Aug 2017</em> / Category: <em>Design</em></span>
                </div>
              </div>
            </div>
          </b-col>
          <b-col md="6">
            <b-row>
              <b-col md="12">
                <div class="blog-item second-blog b2">
                  <div class="thumb">
                    <b-img src="../assets/img/blog_02.jpg"
                           alt="图像"
                           fluid></b-img>
                    <div class="text-content">
                      <h4>Creative &amp; Clean Workspace</h4>
                      <span>Posted: <em>Kerley</em> / Date: <em>24 Jul 2017</em> / Category: <em>Artwork</em></span>
                    </div>
                  </div>
                </div>
              </b-col>
              <b-col md="12">
                <div class="blog-item b3">
                  <div class="thumb">
                    <b-img src="../assets/img/blog_03.jpg"
                           alt="图像"
                           fluid></b-img>
                    <div class="text-content">
                      <h4>Crashed Plane Captured</h4>
                      <span>Posted: <em>Johnny</em> / Date: <em>16 Jul 2017</em> / Category: <em>Branding</em></span>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="12">
            <div class="pop">
              <span>✖</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis neque lacinia, porta nulla in,
                pellentesque ante. Vivamus in luctus mauris, non pharetra nibh. Morbi porttitor nisl sit amet velit
                pellentesque consequat. Etiam blandit libero turpis, id vehicula leo posuere a. In vel massa sollicitudin,
                tincidunt massa et, tincidunt ex.<br><br>Duis volutpat condimentum mollis. Sed eleifend libero ut viverra
                mattis. Suspendisse consectetur diam dolor, ut efficitur sem finibus vel. Vivamus tristique lacus sed
                dapibus varius. Fusce pharetra, quam quis congue pretium, ante dui imperdiet ipsum, eget lobortis leo leo
                sed diam.</p>
            </div>
            <div class="pop2">
              <span>✖</span>
              <p>Praesent purus leo, aliquet et efficitur id, pulvinar scelerisque enim. Maecenas a arcu sagittis, ornare
                ante ut, suscipit lectus. Donec dolor ipsum, laoreet nec metus non, tempus elementum massa. Donec non elit
                rhoncus, vestibulum enim sed, rutrum arcu. Vestibulum et purus ac diam condimentum volutpat sed ac est.
                Phasellus interdum tortor sem. Quisque sit amet condimentum sem. Phasellus luctus, felis sit amet pulvinar
                luctus, lectus dui mattis tellus, et placerat nunc ante at lacus.<br><br>Vivamus vestibulum, nisi sed
                placerat accumsan, felis felis venenatis tortor, vel condimentum arcu neque vel mauris. Donec a magna
                gravida, egestas libero non, molestie massa. Integer ut dolor eget magna congue gravida ut at arcu.
                Vivamus maximus neque quis luctus tempus. Vestibulum consequat a justo id feugiat. </p>
            </div>
            <div class="pop3">
              <span>✖</span>
              <p>Nullam rhoncus, orci et iaculis sodales, quam lectus suscipit augue, ut auctor massa dolor id metus.
                Nulla porta ut diam sodales dignissim. Ut sit amet augue vel justo laoreet dignissim. Maecenas vitae
                sollicitudin eros. In commodo placerat cursus. Quisque malesuada, nisl ac lacinia commodo, justo eros
                maximus ex, quis cursus odio erat at neque. Sed tincidunt eu dolor eget posuere.<br><br>Curabitur sit amet
                elit sit amet ligula eleifend aliquam quis eget quam. Mauris id mi nec justo venenatis tincidunt at ac
                massa. Sed et volutpat nunc. Quisque at urna quam. Duis sit amet neque eget quam iaculis iaculis. Quisque
                maximus porta elementum. Nam ac mattis erat, quis accumsan odio.</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="fun-facts">
      <b-container>
        <b-row>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="fact-item">
              <div class="counter"
                   data-count="926">0</div>
              <span>Regular Visitors</span>
            </div>
          </b-col>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="fact-item">
              <div class="counter"
                   data-count="214">0</div>
              <span>Finished Projects</span>
            </div>
          </b-col>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="fact-item">
              <div class="counter"
                   data-count="118">0</div>
              <span>Happy Clients</span>
            </div>
          </b-col>
          <b-col md="3"
                 sm="6"
                 cols="12">
            <div class="fact-item">
              <div class="counter"
                   data-count="16">0</div>
              <span>Total Awards</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div id="contact"
         class="page-section">
      <b-container>
        <b-row>
          <b-col md="12">
            <div class="section-heading">
              <h4>Contact Us</h4>
              <div class="line-dec"></div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <div class="map">
              <b-img src="../assets/img/map.jpg"
                     alt="图像"></b-img>
            </div>
          </b-col>
          <b-col md="6">
            <b-row>
              <b-col md="6">
                <b-form-input id="name"
                              name="name"
                              type="text"
                              class="form-control"
                              placeholder="Your name..."
                              required=""></b-form-input>
              </b-col>
              <b-col md="6">
                <b-form-input id="name"
                              name="name"
                              type="text"
                              class="form-control"
                              placeholder="Your name..."
                              required=""></b-form-input>
              </b-col>
              <b-col md="12">
                <b-form-textarea id="message"
                                 name="message"
                                 rows="6"
                                 class="form-control"
                                 placeholder="Your message..."
                                 required=""></b-form-textarea>
              </b-col>
              <b-col md="12">
                <b-button id="form-submit"
                          class="btn">Send Message</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    slide: 0,
  }),
  mounted () {
    this.countNums();
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    },
    countNums () {
      $('.counter').each(function () {
        const self = $(this);
        const countTo = self.attr('data-count')
        $({ countNum: self.text() }).animate({
          countNum: countTo
        }, {
            duration: 8000,
            easing: 'linear',
            step: function () {
              self.text(Math.floor(this.countNum));
            },
            complete: function () {
              self.text(this.countNum);
            }
          })
      })
    }
  }
}
</script>

