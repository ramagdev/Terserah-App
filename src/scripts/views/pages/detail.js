import UrlParser from '../../routes/url-parser'
import RestoDicodingSource from '../../data/resto-dicoding-source'
import CONFIG from '../../globals/config'
import favButtonPresenter from '../../utils/fav-button-presenter'
import '../component/review-item'
import '../component/add-review'
import reviewHandler from '../../utils/review-handler'
import '../../../styles/detail.scss'
import '../../../styles/review.scss'

const Detail = {
  async render () {
    return `
            <div class="content">
              <div class="resto-container"></div>
              <div id="favButtonContainer"></div>
            </div>
        `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await RestoDicodingSource.detailResto(url.id)

    const restoContainer = document.querySelector('.resto-container')
    restoContainer.innerHTML = `
            <h2 class="resto-name" id="content" tabindex="0">${resto.name}</h2>
            <img class="resto-img" src="${CONFIG.MEDIUM_IMAGE_URL + resto.pictureId}" alt="gambar suasana di ${resto.name}" crossorigin="anonymous" tabindex="0" />
            <div class="resto-info">
            <h3 tabindex="0">Informasi</h3>
            <h4 tabindex="0">Alamat</h4>
            <p tabindex="0">${resto.address}</p>
            <h4 tabindex="0">Kota</h4>
            <p tabindex="0">${resto.city}</p>
            <h4 tabindex="0">Kategori</h4>
            <p tabindex="0">${resto.categories.map((category) => ` ${category.name}`)}</p>
            <h4 tabindex="0">Rating</h4>
            <p tabindex="0">${resto.rating}</p>
            </div>
            <div class="resto-overview">
                <h3 tabindex="0">Sekilas Restoran</h3>
                <h4 tabindex="0">Menu makanan</h4>
                <p tabindex="0">${resto.menus.foods.map((food) => ` ${food.name}`)}</p>
                <h4 tabindex="0">Menu minuman</h4>
                <p tabindex="0">${resto.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
                <h4 tabindex="0">Deskripsi</h4>
                <p tabindex="0">${resto.description}</p>

                <h4 tabindex="0">Ulasan Pelanggan</h4>
                <div class="resto-review" id="resto-review"></div>  
            </div>
        `

    const restoReview = document.querySelector('#resto-review')
    resto.customerReviews.forEach((review) => {
      const reviewItem = document.createElement('review-item')

      reviewItem.review = review
      reviewItem.CONFIG = CONFIG
      restoReview.appendChild(reviewItem)
    })

    const restoOverview = document.querySelector('.resto-overview')
    const addReviewElement = document.createElement('add-review')
    addReviewElement.CONFIG = CONFIG
    addReviewElement.id = resto.id
    restoOverview.appendChild(addReviewElement)
    reviewHandler()

    const reviewInputElement = document.querySelector('#review')
    const reviewInputValidity = reviewInputElement.validity
    const addReviewButton = document.querySelector('#add-review')

    addReviewButton.addEventListener('click', () => {
      if (reviewInputValidity.tooShort) {
        reviewInputElement.setAttribute('aria-label', 'Ulasan harus lebih dari 2 karakter')
      }
    })

    reviewInputElement.addEventListener('blur', () => {
      reviewInputElement.setAttribute('aria-label', 'Silahkan menuliskan ulasan di sini')
    })

    favButtonPresenter.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating
      }
    })
  }
}

export default Detail
