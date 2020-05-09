<template>
  <div>
    <main>
      <nuxt class="desktop" />
      <mobile-view class="mobile"></mobile-view>
      <b-footer></b-footer>
    </main>
  </div>
</template>

<script>
// import AOS from 'aos'
// import BLoader from '@/components/BLoader'

import BFooter from '@/components/BFooter'
import MobileView from '@/components/module/MobileView'
export default {
  components: {
    BFooter,
    MobileView
    // BLoader
  },
  data() {
    return {}
  }
  // mounted() {
  //   AOS.init({
  //     offset: 200
  //   })
  // }
}
</script>

<style></style>
