<template>
  <div>
    <main v-if="isLoaded">
      <nuxt />
      <b-footer></b-footer>
    </main>
    <b-loader v-else @loaded="isLoaded = true"></b-loader>
  </div>
</template>

<script>
import AOS from 'aos'
import BFooter from '@/components/BFooter'
import BLoader from '@/components/BLoader'
export default {
  components: {
    BFooter,
    BLoader
  },
  data() {
    return {
      isLoaded: true
    }
  },
  mounted() {
    AOS.init({
      offset: 200
    })
  }
}
</script>

<style></style>
