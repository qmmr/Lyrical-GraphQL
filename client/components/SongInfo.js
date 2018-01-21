/* eslint-disable react/prop-types */
import LyricForm from './LyricForm'
import React from 'react'
import { graphql } from 'react-apollo'
import { query } from '../queries/song'

export const SongInfo = ({ data, params }) => {
  const { loading, song } = data

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <h1>Song Info</h1>
      <h2>Title: {song.title}</h2>
      <ul>
        {song.lyrics.map(lyric => (
          <li key={lyric.id}>
            <p>{lyric.content}</p>
          </li>
        ))}
      </ul>
      <LyricForm id={params.id} />
    </section>
  )
}

export default graphql(query, {
  options: ({ params }) => ({ variables: { id: params.id } })
})(SongInfo)
