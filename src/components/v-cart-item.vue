<template>
    <div class="v-cart-item-wrapper">
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
  name: 'v-cart-item-wrapper',
  components: {

  },
  props: {},
  data () {
    return {
      title: 'Cart item'
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
    .v-cart-item-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-basis: 25%;
        align-items: center;
        box-shadow: 0 0 8px 0 grey;
        padding: 20px;
        margin: 2px;
    }
</style>
