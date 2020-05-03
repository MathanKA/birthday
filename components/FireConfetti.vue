<template>
  <div>
    <div>
      <span id="fireConfetti" class="btn">🎉 </span>
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
export default {
  props: {
    fireConfetti: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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

  watch: {
    fireConfetti(newVal) {
      if (newVal) {
        console.log(newVal)
        this.initFireConfetti()
      }
    }
  },
  mounted() {
    // this.initFireConfetti()
  },
  methods: {
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
