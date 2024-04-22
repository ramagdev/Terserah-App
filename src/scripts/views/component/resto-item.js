class RestoItem extends HTMLElement {
  set resto (resto) {
    this._resto = resto
  }

  get resto () {
    return this._resto
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
      <a href="/#/detail/${this._resto.id}">
        <img class="lazyload resto-img" data-src="${this._config.SMALL_IMAGE_URL + this._resto.pictureId}" alt="gambar suasana di ${this._resto.name}" crossorigin="anonymous">
      </a>
      <div class="resto-rating">
        <p>⭐️<span class="resto-rating-score" tabindex="0" aria-label="rating restoran: ${this._resto.rating}">${this._resto.rating.toFixed(1)}</span></p>
      </div>
      <div class="resto-info">
        <h3 class="resto-name"><a href="/#/detail/${this._resto.id}">${this._resto.name}</a></h3>
        <p class="resto-city" tabindex="0" aria-label="di kota: ${this._resto.city}">${this._resto.city}</p>
        <div class="resto-desc-container">
          <p class="resto-description" tabindex="0" aria-label="deskripsi restoran: ${this._resto.description}">${this._resto.description}</p>
        </div>
      </div>
    `
  }
}

customElements.define('resto-item', RestoItem)
