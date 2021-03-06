import gql from 'graphql-tag'

export const query = gql`
  query SongInfo($id: ID!) {
    song(id: $id) {
      id
      lyrics {
        id
        likes
        content
      }
      title
    }
  }
`
