import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import { query } from '../queries/getSongs'

class SongList extends Component {
  render() {
    const { loading, songs } = this.props.data
    return (
      <div>
        <h2>SongList</h2>
        {loading ? <div>Loading...</div> : <ul>{songs.map(({ id, title }) => <li key={id}>{title}</li>)}</ul>}
      </div>
    )
  }
}

export default graphql(query)(SongList)
