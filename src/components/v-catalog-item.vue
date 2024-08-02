<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__img"
      :src="require('../assets/images/' + product_data.image)"
      alt="picture"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }}</p>
    <p class="v-catalog-item__about">{{ product_data.about }}</p>
    <button class="v-catalog-item__btn" @click="addToCart">Add</button>
  </div>
</template>
<script>
export default {
  name: 'v-catalog-item',
  components: {},
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      title: 'Catalog item'
    }
  },
  computed: {},
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  },
  watch: {},
  mounted () {
    console.log('Use mounted')
  }
}
</script>
<style lang="scss">
.v-catalog-item {
  flex-basis: 40%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
  border-radius: 5%;
  &__img{
    max-width: 100px;
  }
}
.v-catalog-item__img {
  width: 160px;
  display: block;
  margin: 0 auto;
}
</style>
