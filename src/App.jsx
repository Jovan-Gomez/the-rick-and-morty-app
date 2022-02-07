import './App.css'
import { useLazyQuery, useQuery } from '@apollo/client'
import Layout from './Layout'
import { GET_CHARACTERS, GET_COUNT_EPISODES, GET_COUNT_LOCATIONS } from './gql/queries'
import { useEffect, useState } from 'react'
import CharacterCard from './components/CharacterCard'
import { getRandomPage } from './utils/getRandomPage'
import Loading from './components/Loading'

function App() {
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  const [page, setPage] = useState(1)

  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { page } })
  const episodes = useQuery(GET_COUNT_EPISODES)
  const locations = useQuery(GET_COUNT_LOCATIONS)
  const [getNext] = useLazyQuery(GET_CHARACTERS, { variables: { page: info?.next } })
  const [getPrev] = useLazyQuery(GET_CHARACTERS, { variables: { page: info?.prev } })

  useEffect(() => {
    setPage(getRandomPage())
    return () => setPage(0)
  }, [])

  useEffect(() => {
    if (!loading) {
      setCharacters(data.characters.results)
      setInfo(data.characters.info)
      return
    }
  }, [loading])

  const handleSearch = (data) => {
    if (data && data.characters) {
      setCharacters(data.characters.results)
      setInfo(data.characters.info)
      return
    }
  }

  const nextPage = () => {
    if (info.next === null) return
    getNext()
      .then((res) => {
        setInfo(res.data.characters.info)
        setCharacters(res.data.characters.results)
      })
      .catch((err) => console.log(err))
  }
  const prevPage = () => {
    if (info.prev === null) return
    getPrev()
      .then((res) => {
        setInfo(res.data.characters.info)
        setCharacters(res.data.characters.results)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Layout
      handleSearch={handleSearch}
      infoFooter={{
        characters: info.count,
        locations: locations?.data?.locations?.info?.count,
        episodes: episodes?.data?.episodes.info?.count,
      }}
    >
      <main className='main'>
        <div className='arrows'>
          <button className='arrow' onClick={prevPage}>
            {'<'}
          </button>
          <button className='arrow' onClick={nextPage}>
            {'>'}
          </button>
        </div>
        <div className='container main__content'>
          {loading ? <Loading /> : characters.map((c) => <CharacterCard key={c.id} character={c} />).slice(0, 6)}
        </div>
      </main>
    </Layout>
  )
}

export default App
