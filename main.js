const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Warm&Comfy',
            selectedOption: 0,
            inventory: 11,
            onSale: false,
            details: ['50% cotton', '35% wool', '20% polyester'],
            options: [
                {id: 1, color: 'green', 
                image: './assets/images/socks_green.jpg',
                quantity: 11
                },
                {id: 2, color: 'blue', 
                image: './assets/images/socks_blue.jpg',
                quantity: 0
                },
            ],
            url: 'http://aguerrevere.dev'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
            this.inventory -= 1
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
                this.inventory += 1
            }
        }, 
        updateOption(index) {
            this.selectedOption = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.options[this.selectedOption].image
        },
        inStock() {
            return this.options[this.selectedOption].quantity
        }
    }
})
