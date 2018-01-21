/* eslint-disable react/no-multi-comp, react/prop-types */
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import { Link } from 'react-router'
import { mutation } from '../mutations/deleteSong'
import { query } from '../queries/songs'

const Song = ({ id, mutate, refetch, title }) => {
  const handleClick = event => {
    event.preventDefault()
    mutate({
      variables: { id }
    }).then(() => refetch())
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
        alignItems: 'center'
      }}>
      <p>
        <Link to={`/songs/info/${id}`}>{title}</Link>
      </p>
      <i onClick={handleClick} className="material-icons" style={{ cursor: 'pointer' }}>
        delete
      </i>
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
            {songs.map(props => (
              <Song key={props.id} {...props} mutate={this.props.mutate} refetch={this.props.data.refetch} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default compose(graphql(query), graphql(mutation))(SongList)
