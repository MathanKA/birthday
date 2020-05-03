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
            <h1>
              HELLO WORLD
            </h1>
            <!-- <client-only>
              <fire-confetti :fire-confetti="fireConfetti"></fire-confetti>
            </client-only> -->
            <cake @releaseBalloons="triggerBalloons"></cake>
          </b-col>
          <b-col cols="2">
            <balloon-group></balloon-group>
          </b-col>
        </b-row>
        <balloons
          class="flying-balloons"
          :release-balloons="releaseBalloons"
        ></balloons>
      </b-container>
    </section>
  </div>
</template>

<script>
import BalloonGroup from '@/components/BalloonGroup'
import Cake from '@/components/Cake'
// import FireConfetti from '@/components/FireConfetti'
export default {
  components: {
    'wind-banners': () => import('@/components/WindBanners.vue'),
    balloons: () => import('@/components/Balloons.vue'),
    BalloonGroup,
    Cake
  },
  data() {
    return { releaseBalloons: false, balloonKey: 0 }
  },
  methods: {
    triggerBalloons() {
      this.releaseBalloons = !this.releaseBalloons
    }
  }
}
</script>
