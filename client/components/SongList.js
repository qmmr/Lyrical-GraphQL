import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongList extends Component {
	render() {
		const { loading, songs } = this.props.data
		return (
			<div>
				<h2>SongList</h2>
				{loading ? <div>Loading...</div> : <ul>{songs.map(({title}) => <li key={title}>{title}</li>)}</ul>}
			</div>
		)
	}
}

const query = gql`
	{
		songs {
			title
		}
	}
`

export default graphql(query)(SongList)
