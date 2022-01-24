import '../../styles/components/Nav/Nav.sass'
import SearchInput from '../SearchInput';

const Nav = () => {
  return (
    <nav className="navContainer">
      <SearchInput />

      <div className='center-links'>
        <span>Descobrir</span>
        <span>Navegar</span>
        <span>Novidades</span>
      </div>

      <div>
        <span>Lista de desejos</span>
        <span>Carrinho</span>
      </div>
    </nav>
  )
}

export default Nav;