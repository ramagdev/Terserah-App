import RestoDicodingSource from '../../data/resto-dicoding-source'
import CONFIG from '../../globals/config'
const heroImageSmallWebP = require('../../../public/images/heros/hero-image_2_small.webp')
const heroImageSmall = require('../../../public/images/heros/hero-image_2_small.jpg')
const heroImageWebP = require('../../../public/images/heros/hero-image_2.webp')
const heroImage = require('../../../public/images/heros/hero-image_2.jpg')

const Home = {
  async render () {
    return `
      <style>
        .hero {
          width: 100%;
          margin-block: 3em;
          display: flex;
          background-image: url(${heroImageWebP}), url(${heroImage});
          background-position: center;
          background-size: cover;
          height: 23em;
        }       
        .hero p {
          text-align: center;
          margin: auto;
          color: black;
          font-size: 4em;
          font-family: Lato, sans-serif;
          font-weight: bolder;
          text-shadow: 0 0 20px white;
          font-style: italic;
        }
        @media screen and (max-width: 425px) {
          .hero {
            background-image: url(${heroImageSmallWebP}), url(${heroImageSmall});
            height: 320px;
          }   
          .hero p {
            font-size: 3em;
          }
        }
      </style>
      <div class="hero">
        <p tabindex="0">Temukan restoran favorit Anda bersama kami</p>
      </div>
      <div class="content">
        <h2 class="content__heading" tabindex="0" id="content">Daftar Restoran</h2>
        <div class="resto-list"></div>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await RestoDicodingSource.listResto()
    const restoList = document.querySelector('.resto-list')

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

export default Home
