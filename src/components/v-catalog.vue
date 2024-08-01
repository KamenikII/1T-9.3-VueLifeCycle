<template>
  <div class='v-catalog-wrapper'>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link_to_cart">
        <i class="medium material-icons">shopping_cart</i>
        {{CART.length}}
      </div>
    </router-link>

    <div class="v-catalog__list">
      <vCatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product_data="product"
      @addToCart="addToCart"
    />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'v-catalog-wrapper',
  components: {
    vCatalogItem
  },
  props: {},
  data () {
    return {
      title: 'Catalog'
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCT', 'ADD_TO_CART']),
    addToCart (data) {
      this.ADD_TO_CART(data)
    }
  },
  watch: {},
  mounted () { // Хук жизненного цикла
    this.GET_PRODUCT()
      .then((response) => {
        if (response.data) {
          console.log('Catalog in v-catalog.vue loaded from store/index.js')
        }
      })
  }
}
</script>
<style lang='scss'>
  .v-catalog-wrapper,
  .v-catalog__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  // .v-catalog-wrapper {
  //     display: flex;
  //     justify-content: center;
  // }
  .v-catalog__link_to_cart {
    padding: absolute;
    top: 10px;
    right: 15px;
    padding: 15px;
  }
</style>
