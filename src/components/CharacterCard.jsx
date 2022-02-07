const CharacterCard = ({ character }) => {
  const { name, status, species, location, image, id, episode } = character

  const baseUrl = 'https://rickandmortyapi.com/api'
  const firstEpisode = {
    id: episode[0].id,
    name: episode[0].name,
  }
  const getStatusColor = () => {
    switch (status) {
      case 'Alive':
        return 'alive'
      case 'Dead':
        return 'dead'
      case 'unknown':
        return 'unknown'
    }
  }

  return (
    <article className='character'>
      <div className='character__img'>
        <img src={image} alt={name} />
      </div>
      <div className='character__content'>
        <div className='content'>
          <a href={`${baseUrl}/character/${id}`} target='_blank'>
            <h2>{name}</h2>
          </a>

          <div className='status'>
            <span className={`color ${getStatusColor()}`}></span>
            <span>
              {status} - {species}
            </span>
          </div>
        </div>
        <div className='content'>
          <h2>Last known location:</h2>
          <a href={`${baseUrl}/location/${location.id}`} target='_blank'>
            <span>{location.name}</span>
          </a>
        </div>
        <div className='content'>
          <h2>First seen in:</h2>
          <a href={`${baseUrl}/episode/${firstEpisode.id}`} target='_blank'>
            <span>{firstEpisode.name}</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default CharacterCard
