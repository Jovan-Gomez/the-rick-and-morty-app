import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_CHARACTERS_BY_NAME } from '../gql/queries'

const SearchBar = ({ handleSearch }) => {
  const [name, setName] = useState('')
  const [err, setErr] = useState('')

  const [getCharacters, { loading, data, error }] = useLazyQuery(GET_CHARACTERS_BY_NAME, {
    variables: { filter: { name } },
  })
  useEffect(() => {
    if (name) {
      setErr('')
    }
  }, [name])

  const handleSubmit = () => {
    getCharacters()
    if (!name) return setErr('Name is required')
    if (error) return setErr('Character not found')
    if (!loading) {
      handleSearch(data)
    }
  }
  return (
    <div className='search'>
      <div className='searchBar'>
        <input
          type='text'
          placeholder={err ? err : 'Search by name'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type='button' value='search' onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default SearchBar
