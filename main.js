const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 9,
            onSale: false,
            details: ['50% cotton', '35% wool', '20% polyester'],
            options: [
                {id: 1, color: 'green', image: './assets/images/socks_green.jpg'},
                {id: 2, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
            url: 'http://aguerrevere.dev'
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(optionImage) {
            this.image = optionImage
        }
    }
})
