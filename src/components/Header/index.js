import { Container, Menu } from "./styles";
import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies, MdMonitor, MdClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext, useState } from "react";
import { MediasContext } from "../../contexts/MediasContext";
import { Link } from "react-router-dom";

export default function Header() {
    const { path } = useContext(MediasContext);
    const [ menu, setMenu ] = useState(false);

    return(
        <Container>
            <Link to='/'><h2>Productions Guide</h2></Link>
            <Menu activePage={path} className={menu ? 'menu-open' : ''}>
                <ul>
                    <li>
                        <Link to="/">
                            <AiFillHome size={30}/>
                            <span>Início</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <MdLocalMovies size={30}/>
                            <span>Filmes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/series">
                            <MdMonitor size={30}/>
                            <span>Séries</span>
                        </Link>
                    </li>
                </ul>
            </Menu>
            <GiHamburgerMenu size={25} color={'var(--color-main-font)'} className='btn-open-menu' onClick={() => {setMenu(true)}}/>
            <MdClose size={30} color={'var(--color-main-font)'} className={menu ? 'btn-close-menu menu-open' : 'btn-close-menu'} onClick={() => {setMenu(false)}}/>
        </Container>
    );
}