import { AiOutlineSearch } from 'react-icons/ai';

import '../../styles/components/SearchInput/SearchInput.sass'

const SearchInput = () => {
  return (
    <div className='search-input-container'>
      <div className='search-icon'>
        <AiOutlineSearch size={15} color='#c5c5c5'/>
      </div>
      <div className='search-input'>
        <input type="text" placeholder='Pesquisar' />
      </div>
    </div>
  )
}

export default SearchInput;