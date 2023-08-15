import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'

export const AuthContext = createContext()

export const AuthProvider = function({ children }) {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('')
  const [mapCoordinates, setMapCoordinates] = useState({ lat: '', lon: '' })
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    if (data.length > 0) {
      const lat = data[0].lat
      const lon = data[0].lon
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=50c7eef00d13b49fb4b8a0b1dbaceafb`

      axios.get(weatherUrl).then((weatherResponse) => {
        const forecastData = weatherResponse.data.list.slice(0, 7) // Fetching 4 days of forecast
        // const forecastData = weatherResponse.data.list
        // console.log(forecastData)
        setData(forecastData)
        setMapCoordinates({ lat, lon }) // Set the map coordinates
      })
    }
  }, [data])

  const searchBtn = (e) => {
    if (e.key === 'Enter') {
      searchLocation()
    }
  }

  const searchLocation = () => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=50c7eef00d13b49fb4b8a0b1dbaceafb`

    axios.get(url).then((response) => {
      setData(response.data)
      if (data.length > 0) setShowContent(false)
    })
  }

  const locator = (event) => {
    setLocation(event.target.value)
  }

  return (
    <AuthContext.Provider
      value={{
        locationName: data.length > 0 ? data[0].name : '',
        forecastData: data,
        location,
        locator,
        searchLocation,
        searchBtn,
        mapCoordinates,
        showContent,
        setShowContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined)
    throw new Error('useAuth was used other its provider')

  return context
}
