/* eslint-disable react/prop-types */
import React, { Component } from 'react'
// import { compose, graphql } from 'react-apollo'

// import { mutation } from '../mutations/deleteSong'
// import { query } from '../queries/songs'

export class LyricList extends Component {
  handleClick(id) {
    event.preventDefault()
    console.log('thumb_up lyric id', id)
  }

  render() {
    const { lyrics } = this.props

    return (
      <div>
        <ul className="collection">
          {lyrics.map(lyric => (
            <li
              key={lyric.id}
              className="collection-item"
              style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <p>{lyric.content}</p>
              <i className="material-icons" onClick={() => this.handleClick(lyric.id)} style={{ cursor: 'pointer' }}>
                thumb_up
              </i>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default LyricList
