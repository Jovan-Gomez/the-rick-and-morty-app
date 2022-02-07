import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
const Header = ({ handleSearch }) => {
  const baseUrl = 'https://rickandmortyapi.com'
  return (
    <header className='header'>
      <nav className='header__navbar'>
        {' '}
        <Logo />
        <div className='nav'>
          <SearchBar handleSearch={handleSearch} />
          <div className='header__links'>
            <a href={`${baseUrl}/documentation`} target='_blank'>
              Docs
            </a>
            <a href={`${baseUrl}/about`} target='_blank'>
              About
            </a>
            <a className='help' href={`${baseUrl}/help-us`} target='_blank'>
              HELP US
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
