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
import BFooter from '@/components/BFooter'
import BLoader from '@/components/BLoader'
export default {
  components: {
    BFooter,
    BLoader
  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {}
}
</script>

<style></style>
