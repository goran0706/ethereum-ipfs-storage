const copyTextToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    throw new Error('browser clipboard not available')
  }
  navigator.clipboard.writeText(text).then(
    function () {
      console.log('Async: Copying to clipboard was successful!')
    },
    function (err) {
      console.error('Async: Could not copy text: ', err)
    }
  )
}

export default copyTextToClipboard
