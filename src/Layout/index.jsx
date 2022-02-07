import Footer from './Footer'
import Header from './Header'
import './index.css'
import RickAndMortySection from './RickAndMortySection'
const Layout = ({ children, handleSearch, infoFooter }) => {
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <RickAndMortySection />
      {children}
      <Footer infoFooter={infoFooter} />
    </div>
  )
}

export default Layout
