import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query ($page: Int) {
    characters(page: $page) {
      info {
        next
        prev
        pages
        count
      }
      results {
        id
        name
        status
        species
        image
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`

export const GET_CHARACTERS_BY_NAME = gql`
  query ($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        next
        prev
        pages
        count
      }
      results {
        id
        name
        status
        species
        image
        location {
          id
          name
        }
        episode {
          id
          name
        }
      }
    }
  }
`

export const GET_COUNT_EPISODES = gql`
  query {
    episodes {
      info {
        count
      }
    }
  }
`
export const GET_COUNT_LOCATIONS = gql`
  query {
    locations {
      info {
        count
      }
    }
  }
`
