import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

import Header from './components/Header';

export function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/series' element={<Series/>}/>
            </Routes>
        </BrowserRouter>
    );
}