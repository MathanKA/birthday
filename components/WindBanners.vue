<template>
  <b-row class="w-100 mx-0 flex-nowrap">
    <div class="banner">
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="string">
        <svg width="800" height="230" viewBox="0 0 800 230">
          <path fill="none" d="M0,0 C100,50 500,100 700,0" />
        </svg>
      </span>
    </div>
    <div class="banner">
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="flag"></span>
      <span class="string">
        <svg width="800" height="230" viewBox="0 0 800 230">
          <path fill="none" d="M0,0 C100,50 500,100 700,0" />
        </svg>
      </span>
    </div>
  </b-row>
</template>

<script>
// const windBanner = require('@/assets/scripts/wind-banner.js')
export default {
  mounted() {
    this.initFunc()
  },
  methods: {
    initFunc() {
      const strands = Array.from(document.querySelectorAll('.banner'))
      const duration = 5450
      const supportsOffsetPath =
        window.CSS &&
        CSS.supports &&
        CSS.supports('offset-path', "path('M0,0 L1,1')")
      const rxRandomNegative = -20
      const rxRandomNegativeBase = -30
      const rxRandomPositive = 40
      const rxRandomPositiveBase = 30
      if (document.documentElement.animate) {
        strands.forEach(animateStrands)
      }
      function animateStrands(strand) {
        const flags = Array.from(strand.querySelectorAll('.flag'))
        // const strandPathDuration = Math.random() * (2 * duration) + duration
        // const fromPath = "path('M0,0 C100,100 700,200 800,50')"
        // const toPath = `path('M0,0 C${Math.random() * 20 + 80},${
        //   Math.random() * 20 + 80
        // } ${Math.random() * -50 + 700},${Math.random() * 100} 800,100')`

        flags.forEach((flag, i) => {
          flag.style.offsetDistance = `${80 + (i * 650) / flags.length}px`
          animateWindRotate(flag)
          // animateWindCurve(flag, fromPath, toPath, strandPathDuration)
        })

        if (supportsOffsetPath) {
          // animateStringInWind(strand, fromPath, toPath, strandPathDuration)
        }
      }

      function animateWindRotate(flag) {
        flag.animate(getRandomizedFlagFrames(), {
          duration,
          iterations: Infinity,
          direction: 'alternate',
          delay: 1000 * Math.random() - 1000
        })
      }
      // function animateWindCurve(flag, fromPath, toPath, strandPathDuration) {
      //   flag.animate([{ offsetPath: fromPath }, { offsetPath: toPath }], {
      //     duration: strandPathDuration,
      //     iterations: Infinity,
      //     easing: 'ease-in-out',
      //     direction: 'alternate'
      //   })
      // }
      // function animateStringInWind(
      //   strand,
      //   fromPath,
      //   toPath,
      //   strandPathDuration
      // ) {
      //   const stringy = strand.querySelector('.string path')
      //   if (stringy) {
      //     stringy.animate([{ d: fromPath }, { d: toPath }], {
      //       duration: strandPathDuration,
      //       iterations: Infinity,
      //       easing: 'ease-in-out',
      //       direction: 'alternate'
      //     })
      //   }
      // }

      function getRandomizedFlagFrames() {
        const easing1 = `cubic-bezier(${Math.random() * 0.1 + 0.3},0,${
          Math.random() * 0.1 + 0.3
        },${Math.random() * 0.15 + 0.95})`
        const easing2 = `cubic-bezier(${Math.random() * 0.1 + 0.3},0,${
          Math.random() * 0.1 + 0.3
        },${Math.random() * 0.15 + 0.95})`
        return [
          {
            transform: 'rotateX(0deg)',
            filter: 'grayscale(5%)'
          },
          {
            transform: `rotateX(${
              Math.random() * rxRandomNegative + rxRandomNegativeBase
            }deg)`,
            filter: 'grayscale(25%)', // shadows for when rotating away from you
            easing: easing1
          },
          {
            transform: `rotateX(${
              Math.random() * rxRandomPositive + rxRandomPositiveBase
            }deg)`,
            filter: 'grayscale(0%)',
            easing: easing1
          },
          {
            transform: `rotateX(${
              Math.random() * rxRandomNegative + rxRandomNegativeBase
            }deg)`,
            filter: 'grayscale(25%)',
            easing: easing2
          },
          {
            transform: `rotateX(${
              Math.random() * rxRandomPositive + rxRandomPositiveBase
            }deg)`,
            filter: 'grayscale(0%)',
            easing: easing2
          }
        ]
      }
    }
  }
}
</script>
