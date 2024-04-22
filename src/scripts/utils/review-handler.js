import RestoDicodingSource from '../data/resto-dicoding-source'
import CONFIG from '../globals/config'

const reviewHandler = () => {
  const formElement = document.querySelector('add-review')

  const onSubmit = async () => {
    const id = formElement.id
    const name = formElement.nameValue
    const review = formElement.reviewValue

    const customerReview = {
      id,
      name,
      review
    }

    const result = await RestoDicodingSource.addReview(customerReview)
    try {
      if (result.error) {
        alert(result.message)
      }
      renderReview(result)
    } catch (error) {
      console.log(error)
    }
  }

  formElement.submitEvent = onSubmit

  const renderReview = (result) => {
    const restoReview = document.querySelector('#resto-review')
    restoReview.innerHTML = ''

    const customerReviews = result.customerReviews
    customerReviews.forEach((review) => {
      const reviewItem = document.createElement('review-item')

      reviewItem.review = review
      reviewItem.CONFIG = CONFIG

      restoReview.appendChild(reviewItem)
    })
  }
}

export default reviewHandler
