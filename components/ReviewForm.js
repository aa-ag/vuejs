app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name">

    <label for="review">Review:</label>
    <textarea id="review"></textarea>

    <label for="rating">RAting:</label>
    <select id="rating">
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
    }
})

