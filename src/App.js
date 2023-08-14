import './App.css'
import { AuthProvider } from './context/auth-context'

import Map from './Map'
import Input from './Input'
import Main from './Main'

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <div className='container'>
          <p>
            <button className='cc'>
              <a
                href='https://www.un.org/en/climatechange'
                target='_blank'
                rel='noopener noreferrer'
              >
                🌎
              </a>
              {/* <span className='info-box'>Know more about Climate Change</span> */}
            </button>
          </p>
          <Input />

          {/* <Main location={location} /> This was refractored to below */}
          <Main />
          <Map />
        </div>
        <footer>Made with ❤ for Nature & People</footer>
      </div>
    </AuthProvider>
  )
}

export default App
