class ReviewItem extends HTMLElement {
  set review (review) {
    this._review = review
  }

  get review () {
    return this._review
  }

  set CONFIG (config) {
    this._config = config
    this.render()
  }

  get CONFIG () {
    return this._config
  }

  render () {
    this.innerHTML = `
            <p class="review-name" tabindex="0"><b>${this._review.name}</b></p>
            <p class="review-review" tabindex="0">${this._review.review}</p>
            <p class="review-date" tabindex="0"><i>${this._review.date}</i></p>
        `
  }
}

customElements.define('review-item', ReviewItem)
