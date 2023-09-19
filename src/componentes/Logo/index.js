import './estilo.css'
import logo from '../../imagens/logo.png'

function Logo () {
    return(
        <div className='logo'>
            <img
                src={logo}
                alt='logo'
                className='logo-img'
            ></img>
            <p><strong>Library</strong>Books</p>
        </div>
    )
}

export default Logo