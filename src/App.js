import './styles/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './Pages/About/About';
import Posts from './Pages/Posts/Posts';
import Header from './components/UI/Header/Header';
import Error from './Pages/Error/Error';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Header /><Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />

        </Routes>


      </BrowserRouter>

    </div>


  )
}

export default App;
