import FavoriteRestoIdb from '../data/fav-resto-idb'

const favButtonPresenter = {
  async init ({ favButtonContainer, resto }) {
    this._favButtonContainer = favButtonContainer
    this._resto = resto

    await this._renderButton()
  },

  async _renderButton () {
    const id = this._resto.id
    const fontAwesomeLink = document.createElement('link')
    fontAwesomeLink.rel = 'stylesheet'
    fontAwesomeLink.href = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
    fontAwesomeLink.crossorigin = 'anonymous'
    document.head.appendChild(fontAwesomeLink)

    if (await this._isRestoExist(id)) {
      this._renderUnfavorited(id)
    } else {
      this._renderFavorite()
    }
  },

  async _isRestoExist (id) {
    const resto = await FavoriteRestoIdb.getResto(id)
    return !!resto
  },

  _renderFavorite () {
    this._favButtonContainer.innerHTML = `
            <button aria-label="sukai restoran ini" id="favButton" class="fav-button">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
            </button>
        `

    const favButton = document.querySelector('#favButton')
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto)
      this._renderButton()
    })
  },

  _renderUnfavorited (id) {
    this._favButtonContainer.innerHTML = `
            <button aria-label="tidak suka restoran ini" id="favButton" class="fav-button">
                <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
        `

    const favButton = document.querySelector('#favButton')
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(id)
      this._renderButton()
    })
  }
}

export default favButtonPresenter
