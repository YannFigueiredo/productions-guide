import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Search from './pages/Search';
import Production from './pages/Production';
import NotFound from './pages/NotFound';
import Header from './components/Header';


export function RoutesApp() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movies' element={<Movies/>}/>
                <Route path='/series' element={<Series/>}/>
                <Route path='/search/:type/:query' element={<Search/>}/>
                <Route path='/:type/:id' element={<Production/>}/>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}