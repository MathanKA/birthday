<template>
  <div>
    <canvas v-show="releaseBalloons" id="balloons"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    releaseBalloons : {
      type: Boolean,
      default: false
    }
  },
  watch: {
    releaseBalloons(newVal) {
      if (newVal) {
        this.$forceUpdate();
      }
    }
  },
  mounted() {

  }
}
</script>
