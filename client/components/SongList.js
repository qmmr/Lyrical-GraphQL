import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import { query } from '../queries/getSongs'
import { mutation } from '../mutations/deleteSong'

const Song = ({ id, mutate, title }) => {
  const handleClick = event => {
    event.preventDefault()
    mutate({
      variables: { id },
    }).then(data => console.log(data))
  }

  return (
    <li
      key={id}
      style={{
        padding: '0 1em',
        border: '1px solid #444',
        marginBottom: '1em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <p>{title}</p>
      <span onClick={handleClick}>
        <i className="material-icons">delete</i>
      </span>
    </li>
  )
}

class SongList extends Component {
  render() {
    const { loading, songs } = this.props.data
    return (
      <div>
        <h2>SongList</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul style={{ display: 'flex', flexDirection: 'column' }}>
            {songs.map(props => <Song key={props.id} {...props} mutate={this.props.mutate} />)}
          </ul>
        )}
      </div>
    )
  }
}

export default compose(graphql(query), graphql(mutation))(SongList)
