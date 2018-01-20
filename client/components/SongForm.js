import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class SongForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		event.persist()
		this.setState(state => {
			return { title: event.target.value }
		})
	}

	handleSubmit(event) {
		event.persist()
		event.preventDefault()
		console.log(event)
		this.props
			.mutate({
				variables: { title: this.state.title },
			})
			.then(({ data }) => console.log(data))
			.catch(error => console.error(error))
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<legend>Add new song</legend>
				<label htmlFor="title">
					<input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
				</label>
				<button type="submit">Add</button>
			</form>
		)
	}
}

const mutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			id
			title
		}
	}
`

export default graphql(mutation)(SongForm)
