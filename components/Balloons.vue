<template>
  <div>
    <canvas v-show="releaseBalloons" id="balloons"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
const BalloonInit = require('@/static/balloons.js')
export default {
  props: {
    releaseBalloons: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    releaseBalloons(newVal) {
      if (newVal) {
        this.$forceUpdate()
      }
    }
  },
  mounted() {
    this.initBalloons()
  },
  methods: {
    initBalloons () {
      const eleB = document.getElementById('balloons')
      window.balloon(eleB)
    }
  }
}
</script>
