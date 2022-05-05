import './App.css'
import HeaderLeft from './shared/components/HeaderLeft/HeaderLeft'
import Home from './shared/components/mainHome/Home'
import MediaService from './shared/components/MediaService/MediaService'
function App() {
 

  return (
    <div className="App">
     <HeaderLeft />
     <Home/>
     <MediaService />
    </div>
  )
}

export default App
