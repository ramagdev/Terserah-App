import FavoriteRestoIdb from '../../data/fav-resto-idb'
import CONFIG from '../../globals/config'
import '../component/resto-item'

const Favorite = {
  async render () {
    return `
        <div class="content">
            <h2 class="content__heading" id="content" tabindex="0">Daftar Restoran Favorit Anda</h2>
            <div class="resto-list" id="favoriteRestaurants"></div>
        </div>

    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestoIdb.getAllResto()
    const restoList = document.querySelector('.resto-list')

    if (restaurants.length === 0) {
      restoList.innerHTML = '<div class="resto-item__not__found">Tidak ada restoran yang disukai</div>'
      return
    }

    restaurants.forEach((resto) => {
      const restoItem = document.createElement('resto-item')

      restoItem.setAttribute('tabindex', '0')
      resto.index = restaurants.indexOf(resto)
      restoItem.setAttribute('aria-label', `restoran ke-${resto.index + 1}`)

      restoItem.resto = resto
      restoItem.CONFIG = CONFIG
      restoList.appendChild(restoItem)
    })
  }

}

export default Favorite
