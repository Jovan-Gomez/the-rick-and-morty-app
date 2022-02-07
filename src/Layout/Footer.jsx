const Footer = ({ infoFooter }) => {
  const { characters, locations, episodes } = infoFooter

  return (
    <footer className='footer'>
      <div className='info'>
        <h3>CHARACTERS: {characters}</h3>
        <h3>LOCATIONS: {locations}</h3>
        <h3>EPISODES: {episodes}</h3>
      </div>
      <code>
        {'<>'} by{' '}
        <a href='https://g0car.com' target='_blank'>
          G0CAR
        </a>{' '}
        2022
      </code>
    </footer>
  )
}

export default Footer
