/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'react-apollo'
import { query } from '../queries/song'

export const SongInfo = props => {
  console.log('props', props)
  const { data: { loading, song } } = props
  return (
    <section>
      <h1>Song Info</h1>
      {loading ? <div>Loading...</div> : <h2>Title: {song.title}</h2>}
    </section>
  )
}

export default graphql(query, {
  options: ({ params }) => ({ variables: { id: params.id } })
})(SongInfo)
