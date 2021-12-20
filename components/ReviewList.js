app.component('review-list', {
  props: {
    reviews: {
        type: Array,
        required: true
    }
  },
  template:
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        "{{ review.review }}" -- {{ review.rating }}
        <br/>
        <b>{{ review.name  }}</b>
      </li>
    </ul>
  </div>
  `,
})