import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
    width: 130px;
    height: 95px;
`

function Logo () {
    return(
        <LogoContainer>
            <LogoImg
                src={logo}
                alt='logo'
                className='logo-img'
            ></LogoImg>
            <p><strong>Library</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo