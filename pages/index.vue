<template>
  <div>
    <desktop-view class="desktop"> </desktop-view>
    <mobile-view class="mobile"></mobile-view>
  </div>
</template>

<script>
import DesktopView from '@/components/module/DesktopView'
import MobileView from '@/components/module/MobileView'
export default {
  components: {
    DesktopView,
    MobileView
  }
}
</script>
