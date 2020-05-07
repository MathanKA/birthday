<template>
  <div>
    <section id="b-intro">
      <client-only>
        <wind-banners></wind-banners>
      </client-only>
      <b-container fluid>
        <b-row>
          <b-col cols="2">
            <balloon-group></balloon-group>
          </b-col>
          <b-col cols="8" class="text-center">
            <wish data-aos="zoom-in" data-aos-delay="300"></wish>
            <cake
              data-aos="zoom-in-up"
              data-aos-delay="350"
              @releaseBalloons="triggerBalloons"
            ></cake>
          </b-col>
          <b-col cols="2">
            <balloon-group></balloon-group>
          </b-col>
        </b-row>
        <client-only>
          <balloons
            class="flying-balloons"
            :release-balloons="releaseBalloons"
          ></balloons>
        </client-only>
      </b-container>
    </section>
    <section id="b-info">
      <b-container>
        <b-row>
          <b-col cols="8">
            <photo-booth></photo-booth>
          </b-col>
          <b-col cols="4" class="align-self-center">
            <p class="text-left" data-aos="slide-left">
              <span style="font-size: 2rem;">&ldquo;</span>Sometimes, we may
              feel who we are, who we want to be, where exactly we supposed to
              be. but if you notice closely, everything will make sense.<span
                style="font-size: 2rem;"
                >&rdquo;</span
              >
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section id="b-wheel">
      <b-container>
        <b-row>
          <b-col cols="6" class="justify-content-center">
            <!-- <wheel-spin></wheel-spin> -->
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import BalloonGroup from '@/components/BalloonGroup'
import Cake from '@/components/Cake'
import PhotoBooth from '@/components/PhotoBooth'
import Wish from '@/components/Wish'
// import WheelSpin from '@/components/WheelSpin'
// import Balloons from '@/components/Balloons'
export default {
  components: {
    'wind-banners': () => import('@/components/WindBanners.vue'),
    balloons: () => import('@/components/Balloons.vue'),
    // Balloons,
    BalloonGroup,
    Cake,
    PhotoBooth,
    Wish
    // WheelSpin
  },
  data() {
    return { releaseBalloons: false }
  },
  methods: {
    triggerBalloons() {
      this.releaseBalloons = !this.releaseBalloons
    }
  }
}
</script>
