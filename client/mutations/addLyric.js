import gql from 'graphql-tag'

export const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        likes
        content
      }
    }
  }
`
