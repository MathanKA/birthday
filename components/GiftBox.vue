<template>
  <div>
    <section id="js-main" class="main">
      <div class="box">
        <div class="box__item box__item--base"></div>
        <div class="box__item box__item--left"></div>
        <div class="box__item box__item--right"></div>
        <div class="box__item box__item--top"></div>
        <div class="box__item box__item--bottom"></div>
        <div class="box__item box__item--shadow"></div>
      </div>
      <div class="box-icon">
        <p class="b-text-dark">
          Here is your gift...
        </p>
      </div>

      <div id="js-cover-place" class="cover-place">
        <div id="js-cover" class="cover">
          <div class="cover__item cover__item--base">
            <div id="js-base-shadow" class="cover__item__shadow"></div>
          </div>
          <div class="cover__item cover__item--left"></div>
          <div class="cover__item cover__item--bottom">
            <div id="js-bottom-shadow" class="cover__item__shadow"></div>
          </div>
        </div>
      </div>
      <div id="js-left-peel" class="peel-item peel-item--left">
        <div class="peel-item__bg">
          <div id="js-left-inner" class="peel-item__bg__inner"></div>
        </div>
        <div class="peel-item__white"></div>
        <div class="peel-item__gradient"></div>
      </div>
      <div id="js-right-peel" class="peel-item peel-item--right">
        <div class="peel-item__bg">
          <div id="js-right-inner" class="peel-item__bg__inner"></div>
        </div>
        <div class="peel-item__white"></div>
        <div class="peel-item__gradient"></div>
      </div>
      <div id="js-line1" class="line-item line-item--hor"></div>
      <div id="js-line2" class="line-item line-item--vert">
        <div class="bow">
          <div class="bow__content"></div>
          <div class="threads">
            <div class="thread-left">
              <div class="thread-left__content"></div>
            </div>
            <div class="thread-right">
              <div class="thread-right__content"></div>
            </div>
          </div>
          <a id="js-tag" href="" class="tag">
            <div class="tag__content"></div>
          </a>
        </div>
      </div>
      <div id="js-scroll-suggest" class="scroll-suggest">
        <div class="scroll-suggest__content"></div>
      </div>
      <div
        id="js-scroll-suggest-mask"
        class="scroll-suggest scroll-suggest--mask"
      >
        <div class="scroll-suggest__content"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {},
  head() {
    return {
      script: [
        {
          src: '/giftbox.js',
          defer: true
        }
      ]
    }
  }
}
</script>
