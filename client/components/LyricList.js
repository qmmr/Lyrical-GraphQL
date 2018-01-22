/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { mutation } from '../mutations/likeLyric'

export class LyricList extends Component {
  handleClick({ id, likes }) {
    event.preventDefault()
    this.props
      .mutate({
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          likeLyric: {
            __type: 'LyricType',
            id,
            likes: likes + 1
          }
        }
      })
      .then(resp => console.log('resp', resp.data))
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
              <p style={{ display: 'flex', flexGrow: 1 }}>{lyric.content}</p>
              <span style={{ margin: '0 10px' }}>{`(${lyric.likes ? lyric.likes : 0})`}</span>
              <i className="material-icons" onClick={() => this.handleClick(lyric)} style={{ cursor: 'pointer' }}>
                thumb_up
              </i>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default graphql(mutation)(LyricList)
