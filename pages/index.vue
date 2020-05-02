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
            <h1>Hello World!</h1>
            <b-button>Click</b-button>
          </b-col>
          <b-col cols="2">
            <balloon-group></balloon-group>
          </b-col>
        </b-row>
      </b-container>

      <!-- <balloons></balloons> -->
    </section>
  </div>
</template>

<script>
import BalloonGroup from '@/components/BalloonGroup'
export default {
  components: {
    'wind-banners': () => import('@/components/WindBanners.vue'),
    // balloons: () => import('@/components/Balloons.vue')
    BalloonGroup
  }
}
</script>
