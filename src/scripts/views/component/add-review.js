class AddReview extends HTMLElement {
  set id (id) {
    this._id = id
  }

  get id () {
    return this._id
  }

  get nameValue () {
    return this.querySelector('#name').value
  }

  get reviewValue () {
    return this.querySelector('#review').value
  }

  set submitEvent (event) {
    this._submitEvent = event
    this.render()
  }

  render () {
    this.innerHTML = `
                <form aria-label="Ini adalah kolom untuk menambahkan ulasan restoran" tabindex="0">
                    <label for="name">Nama :</label>
                    <input type="text" id="name" maxlength="50" autocomplete="on" placeholder="Ketik nama Anda" required>  
                    <label for="review">Ulasan :</label>
                    <textarea id="review" minlength="2" maxlength="500" placeholder="Silahkan menuliskan ulasan di sini..." aria-label="Silahkan menuliskan ulasan di sini" required></textarea>
                    <button type="submit" id="add-review">Tambah Ulasan</button>
                </form>
        `
    this.addEventListener('submit', (event) => {
      this._submitEvent()
      event.preventDefault()
    })
  }

  get submitEvent () {
    return this._submitEvent
  }
}

customElements.define('add-review', AddReview)
