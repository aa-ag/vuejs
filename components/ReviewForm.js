app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model="rating">
      <option>😡</option>
      <option>😐</option>
      <option>🙂</option>
      <option>🤩</option>
    </select>

    <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            // basic form validation
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert("Review must be complete: pls try again :)")
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
})

