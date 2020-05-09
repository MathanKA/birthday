<template>
  <div>
    <desktop-view v-if="isLoaded"> </desktop-view>
    <b-loader v-else @loaded="isLoaded = true"></b-loader>
  </div>
</template>

<script>
import AOS from 'aos'

// import BFooter from '@/components/BFooter'
import DesktopView from '@/components/module/DesktopView'
import BLoader from '@/components/BLoader'
// import BFooter from '@/components/BFooter'
export default {
  components: {
    DesktopView,
    BLoader
    // BFooter
  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    // setTimeout(() => {
    // }, 1000)
    AOS.init({
      offset: 200
    })
  }
}
</script>
