/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { mutation } from '../mutations/likeLyric'

export class LyricList extends Component {
  handleClick({ id, likes }) {
    event.preventDefault()
    // INFO: Mutate with optimisticResponse
    // https://www.apollographql.com/docs/react/features/optimistic-ui.html
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
      .then(({ data }) => console.log('data', data))
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div>
        <ul className="collection">
          {this.props.lyrics.map(lyric => (
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
