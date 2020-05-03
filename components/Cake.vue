<template>
  <div>
    <div class="b-cake">
      <div class="velas">
        <div class="btn" @click="toggleFire()">
          <div v-if="!isFireOn" class="candle-thread">
            <div class="smoke"></div>
          </div>
          <div v-else id="fireConfetti">
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
          </div>
        </div>
      </div>
      <b-img src="~/static/bb-cake.svg"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFireOn: true,
      confetti_colors: [
        '#E68F17',
        '#FAB005',
        '#FA5252',
        '#E64980',
        '#BE4BDB',
        '#0B7285',
        '#15AABF',
        '#EE1233',
        '#40C057'
      ],
      confettis_conf: {
        angle: 90,
        spread: 360,
        startVelocity: 150,
        elementCount: 200,
        decay: 0.7,
        colors: this.confetti_colors
      }
    }
  },
  methods: {
    toggleFire() {
      this.isFireOn = !this.isFireOn

      if (!this.isFireOn) {
        this.initFireConfetti()
        this.$emit('releaseBalloons')
      }
      setTimeout(() => {
        this.$emit('releaseBalloons')
      }, 20000)
    },
    initFireConfetti() {
      const ele = document.getElementById('fireConfetti')
      window.confetti(ele, this.confettis_conf)
      // ele.addEventListener('click', (e) => {
      //   e.preventDefault()
      // })
    }
  }
}
</script>
