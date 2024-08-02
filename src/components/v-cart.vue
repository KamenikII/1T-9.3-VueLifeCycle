<template>
    <div class="v-cart-wrapper">
        <div class="v-catalog__link_to_cart">
          <i class="medium material-icons">shopping_cart</i>
          {{CART.length}}
        </div>
        <router-link :to="{ name: 'catalog'}">
          <button class="btn">Back to catalog</button>
        </router-link>

        <h2 v-if="!CART.length">There is only space...</h2>
        <vCartItem
          v-for="(item, index) in CART"
          :key="item.article"
          :cart_item_data="item"
          @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>
<script>
import vCartItem from './v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

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
    ...mapGetters(['CART'])
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
      margin: 0 160px;
    }
</style>
