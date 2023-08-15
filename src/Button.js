const Button = () => {
  function handleRedirect() {
    window.location.href = 'https://www.un.org/en/climatechange'
  }
  return (
    <>
      <button className='cc' onClick={handleRedirect}>
        🌎
      </button>
      <span className='info-box'>Know more about Climate Change</span>
    </>
  )
}

export default Button
