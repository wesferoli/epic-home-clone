import epicLogo from '../../assets/images/epic-logo.png';
import { MdOutlineLanguage, MdPerson } from 'react-icons/md';

import '../../styles/components/Header/Header.sass'

const Header = () => {
  return (
    <header>
      <div>
        <img src={epicLogo} alt="Epic Logo" />

        <nav>
          <a href='https://www.epicgames.com/store/pt-BR/'>STORE</a>
          <a href='https://www.epicgames.com/site/pt-BR/epic-games-store-faq'>PERGUNTAS FREQUENTES</a>
          <a href='https://www.epicgames.com/help/pt-BR'>AJUDA</a>
          <a href='https://www.unrealengine.com/'>UNREAL ENGINE</a>
        </nav>
      </div>

      <div className='right-header'>
        <div>
          <MdOutlineLanguage size={20} color='#ccc' />
        </div>
        
        <div className='user-auth'>
          <MdPerson size={20} color='#ccc' />
          <p>ENTRAR</p>
        </div>

        <button>BAIXAR EPIC GAMES</button>
      </div>
    </header>
  )
}

export default Header;