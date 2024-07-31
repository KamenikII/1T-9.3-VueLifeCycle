<template>
    <div class="v-cart-wrapper">
        <h2>{{title}}</h2>
        <vCartItem
          v-for="(item, index) in cart_data"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>
<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'

export default {

  name: 'v-cart-wrapper',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      title: 'Cart'
    }
  },
  computed: {

  },
  methods: {
    ...mapActions(['REMOVE_FROM_CART']),
    deleteFromCart (index) {
      this.REMOVE_FROM_CART(index)
    }
  },
  watch: {

  },
  mounted () {
    console.log('Use mounted')
  }
}
</script>
<style lang="scss" scoped>
    .v-cart-wrapper {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      color: gray;
      font-size: 20px;
      margin-bottom: 150px;
    }
</style>
