import React from 'react'
import { useAuth } from './context/auth-context'
const Input = () => {
  const { location, locator, searchLocation, searchBtn } = useAuth()
  return (
    <div className='input--div'>
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
    </div>
  )
}
export default Input
