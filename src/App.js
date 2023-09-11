import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Posts from './Pages/Posts/Posts'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App;
