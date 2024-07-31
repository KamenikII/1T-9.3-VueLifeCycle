<template>
  <h1>Catalog</h1>
  <div class='v-catalog-wrapper'>
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
    ...mapGetters(['PRODUCTS'])
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
  .v-catalog__list,
  .v-catalog-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
