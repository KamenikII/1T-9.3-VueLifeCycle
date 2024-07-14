<template>
    <div class="v-cart-wrapper">
        <vCartItem />
    </div>
</template>
<script>
import vCartItem from './v-cart-item.vue'

export default {

  name: 'v-cart-wrapper',
  components: {
    vCartItem
  },
  props: {},
  data () {
    return {
      title: 'Cart'
    }
  },
  computed: {

  },
  methods: {

  },
  watch: {

  },
  mounted () {
    console.log('Use mounted')
  }
}
</script>
<style lang="scss">
    .v-cart-wrapper {
    }
</style>
