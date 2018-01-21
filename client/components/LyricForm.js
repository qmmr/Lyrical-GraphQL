/* eslint-disable react/prop-types */
import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import { mutation } from '../mutations/addLyric'

class LyricForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    event.persist()
    this.setState(() => {
      return { content: event.target.value }
    })
  }

  handleSubmit(event) {
    event.persist()
    event.preventDefault()

    this.props
      .mutate({
        variables: { content: this.state.content, songId: this.props.id }
      })
      .then(data => console.log('data', data))
      .catch(error => console.error('error', error))

    this.setState({ content: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Add new lyric</legend>
        <label htmlFor="content">
          <textarea id="content" type="text" value={this.state.content} name="content" onChange={this.handleChange} />
        </label>
        <button type="submit" className="">
          Add
        </button>
      </form>
    )
  }
}

export default graphql(mutation)(LyricForm)
