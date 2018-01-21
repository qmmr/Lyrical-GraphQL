/* eslint-disable react/prop-types */
import LyricForm from './LyricForm'
import LyricList from './LyricList'
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
      {song.lyrics.length ? <LyricList lyrics={song.lyrics} /> : null}
      <LyricForm id={params.id} />
    </section>
  )
}

export default graphql(query, {
  options: ({ params }) => ({ variables: { id: params.id } })
})(SongInfo)
