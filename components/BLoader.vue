/* eslint-disable vue/no-parsing-error */
<template>
  <div>
    <div ref="preloader" class="preloader">
      <div class="preloader__status">
        <div ref="status" class="preloader__status-text text-center">
          <transition name="fade" mode="out-in">
            <p :key="loadText()" class="b-statements">
              {{ loadText() }}
            </p>
          </transition>
        </div>
        <div class="preloader__status-loader">
          <div
            ref="loader"
            :style="loadStyle"
            class="preloader__status-bar"
          ></div>
        </div>
        <div ref="status" class="preloader__status-text text-right">
          {{ loaded }} %
        </div>
      </div>
      <p class="browser-warning">Please view in chrome browser 😊</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-parsing-error */
export default {
  data() {
    return {
      loaded: 0,
      loading: null,
      loadStyle: {
        width: '0%'
      }
    }
  },
  watch: {
    loaded() {
      this.loadStyle.width = `${this.loaded}%`
    }
  },
  mounted() {
    this.preloader = this.$refs.preloader
    this.statusElem = this.$refs.status
    this.loader = this.$refs.loader
    this.removeScrolling()
    this.startLoading()
  },
  methods: {
    loadText() {
      const text =
        this.loaded <= 40
          ? '🤚 Wait, Stage is getting ready for birthday...'
          : this.loaded > 41 && this.loaded < 80
          ? 'meanwhile, Show me your Birth 👼 day dress'
          : this.loaded > 81
          ? 'Okay, Here we go...🥳🥳'
          : ''
      return text
    },
    removeScrolling() {
      document.querySelector('body').style.overflowX = 'hidden'
    },
    startLoading() {
      this.loading = setInterval(this.load, 10)
    },
    load() {
      this.loaded < 100 ? this.loaded++ : this.doneLoading()
    },
    doneLoading() {
      clearInterval(this.loading)
      this.$emit('loaded')
    },

    updateStatus() {
      this.statusElem.text('Lets get crazay !')
      // this.loader.fadeOut()
      this.animatePreloader()
    },
    animatePreloader() {
      const app = this
      const height = this.preloader.height()
      const properties = {
        'margin-top': `-${height}`
      }
      const options = {
        duration: 100,
        easing: 'swing',
        complete() {
          app.removePreloader()
        }
      }
      this.preloader.delay(100).animate(properties, options)
    },
    removePreloader() {
      this.preloader.remove()
      this.body.removeAttr('style')
      this.animateWebsite()
    },
    animateWebsite() {}
  }
}
</script>
