const SkipLink = {
  init ({ skipLink }) {
    skipLink.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#content').focus()
    })
  }
}

export default SkipLink
