import { useAuth } from './context/auth-context'
const Input = () => {
  const { location, locator, searchLocation, searchBtn } = useAuth()
  return (
    <>
      <input
        value={location}
        onChange={locator}
        placeholder='🗺️ Enter Location'
        type='text'
        onKeyDown={searchBtn}
      />
      <button className='btn' onClick={searchLocation}>
        🔍
      </button>
    </>
  )
}
export default Input
