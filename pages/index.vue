<template>
  <div>
    <section id="b-intro">
      <client-only>
        <wind-banners></wind-banners>
      </client-only>
      <b-container>
        <b-row>
          <b-col cols="12">
            <h1>Hello World!</h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    'wind-banners': () => import('@/components/WindBanners.vue')
  }
}
</script>
