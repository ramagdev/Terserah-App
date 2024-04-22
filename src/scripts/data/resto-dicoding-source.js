import API_ENDPOINT from '../globals/api-endpoint'

class RestoDicodingSource {
  static async listResto () {
    try {
      const response = await fetch(API_ENDPOINT.DAFTAR)
      const responseJson = await response.json()
      if (responseJson.error) {
        document.getElementById('loading').style.display = 'flex'
        document.getElementById('error-message').innerHTML = `${responseJson.message}...`
        return Promise.reject(responseJson.message)
      }
      return responseJson.restaurants
    } catch (error) {
      document.getElementById('loading').style.display = 'flex'
      document.getElementById('error-message').innerHTML = 'Network Failed...'
      return console.log('Error', error)
    }
  }

  static async detailResto (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id))
      const responseJson = await response.json()
      if (responseJson.error) {
        document.getElementById('loading').style.display = 'flex'
        document.getElementById('error-message').innerHTML = `${responseJson.message}...`
        return Promise.reject(responseJson.message)
      }
      return responseJson.restaurant
    } catch (error) {
      document.getElementById('loading').style.display = 'flex'
      document.getElementById('error-message').innerHTML = 'Network Failed...'
      return console.log('Error', error)
    }
  }

  static async addReview (review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      const responseJson = await response.json()
      return responseJson
    } catch (error) {
      document.getElementById('loading').style.display = 'flex'
      document.getElementById('error-message').innerHTML = 'Network Failed...'
      return console.log('Error', error)
    }
  }
}

export default RestoDicodingSource
