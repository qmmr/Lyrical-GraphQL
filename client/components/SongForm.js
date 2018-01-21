/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { hashHistory } from 'react-router'
import { mutation } from '../mutations/addSong'
import { query } from '../queries/songs'

class SongForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.persist()
    this.setState(() => {
      return { title: event.target.value }
    })
  }

  handleSubmit(event) {
    event.persist()
    event.preventDefault()

    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [ { query } ]
      })
      .then(() => hashHistory.push('/'))
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

export default graphql(mutation)(SongForm)
