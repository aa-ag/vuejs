app.component('product-display', {
  props: {
    prime: {
      type: Boolean,
      required: true
    },
    inventory: {
      type: Number,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" alt="two green socks">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="onSale">item is on sale!</p>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0" 
          style="color: rgba(255, 47, 0, 0.79);">
          Only <b>{{ inventory }}</b> left!</p>
        <p v-else>Out of Stock</p>
        <p> shipping: {{ shipping }}</p>
        <product-details :details="details"></product-details>
        <div 
          v-for="option in options" 
          :key="option.id"
          @mouseover="updateImage(option.image)"
          class="color-circle"
          :style="{ backgroundColor: option.color }"
          ></div>
        
        <button 
          class="button" 
          v-on:click="addToCart"
          :disabled="inventory === 0"
          :class="{ disabledButton: inventory === 0 }"
          >Add to Cart
        </button>
        <button 
          class="button" 
          v-on:click="removeFromCart"
          >Remove from Cart
        </button>
        <button v-on:click="emptyCart">empty cart</button>

        <p style="color: rgba(126, 118, 118, 0.598); 
        font-size: x-small;
        text-decoration: none;">
          powered by 
          <span>
            <a :href="url" target="blank"
            style="color: rgba(89, 89, 89, 0.824); 
            font-size: x-small;">
              aaron a.
            </a>
          </span>
        </p>
      </div>
    </div>
    <review-form></review-form>
  </div>`,
  data() {
    return {
        product: 'Socks',
        brand: 'Warm&Comfy',
        image: './assets/images/socks_green.jpg',
        onSale: false,
        details: ['50% cotton', '35% wool', '20% polyester'],
        options: [
            {id: 1, color: 'green', 
            image: './assets/images/socks_green.jpg',
            },
            {id: 2, color: 'blue', 
            image: './assets/images/socks_blue.jpg',
            },
        ],
        url: 'http://aguerrevere.dev'
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart')        
      },
      removeFromCart() {
          this.$emit('remove-from-cart')
      },
      emptyCart() {
          this.$emit('empty-cart')
      },
      updateImage(optionImage) {
          this.image = optionImage
      },
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      shipping() {
        if (this.prime) {
          return 'Free Shipping'
        }
        return 2.99
      }
  }
})