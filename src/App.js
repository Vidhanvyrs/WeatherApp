import './App.css'
import { AuthProvider } from './context/auth-context'
import Map from './Map'
import Input from './Input'
import Main from './Main'
import Button from './Button'

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <div className='search'>
          <Button />
          <Input />
          <div className='updater'>
            <Main />
            <Map />
          </div>
          <footer>Made with ❤ for Nature & People</footer>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
