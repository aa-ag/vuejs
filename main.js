const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            inventory: 11,
            prime: false,
        }
    },
    methods: {
        updateCart() {
            this.cart += 1
            this.inventory -= 1
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
                this.inventory += 1
            }
        },
    },
})
