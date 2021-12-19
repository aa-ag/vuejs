app.component('product-details', {
  template:
  /*html*/
  `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`,
  data() {
    return {
      details: ['50% cotton', '35% wool', '20% polyester'],
    }
  }
})