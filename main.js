const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 9,
            onSale: false,
            details: ['50% cotton', '35% wool', '20% polyester'],
            url: 'http://aguerrevere.dev'
        }
    }
})
