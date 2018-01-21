/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// import { compose, graphql } from 'react-apollo'

// import { mutation } from '../mutations/deleteSong'
// import { query } from '../queries/songs'

export class LyricList extends Component {
  render() {
    const { lyrics } = this.props

    return (
      <div>
        Lyric list
        <ul>
          {lyrics.map(lyric => (
            <li key={lyric.id}>
              <p>{lyric.content}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default LyricList
