import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Posts from './Pages/Posts/Posts';
import Header from './components/UI/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
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
