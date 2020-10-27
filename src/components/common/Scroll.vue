<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Scroll from '@better-scroll/core'
  import PullUp from '@better-scroll/pull-up'

  Scroll.use(PullUp)
  
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new Scroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType
      })

      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }

      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finished() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>
  
</style>
