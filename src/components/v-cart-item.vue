<template>
    <div class="v-cart-item-wrapper">
      <img
        class="v-cart-item__img"
        :src="require('../assets/images/' + cart_item_data.image)"
        alt="picture"
      />
      <div>
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}}</p>
      </div>

      <div class="v-cart-item__count">
        <p>Количество: </p>
        <span>
          {{ cart_item_data.quantity }}
        </span>
      </div>
      <button @click="deleteFromCart">Remove</button>
    </div>
</template>

<script>
export default {
  name: 'v-cart-item-wrapper',
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      title: 'Cart item'
    }
  },
  computed: {

  },
  methods: {
    deleteFromCart () {
      this.$emit('deleteFromCart', this.cart_item_data)
    }
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
        &__img {
          min-width: 10%;
        }
    }
</style>
