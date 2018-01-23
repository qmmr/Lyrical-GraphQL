/* eslint-disable react/prop-types */
import { Link } from 'react-router'
import React from 'react'

const Home = props => {
  return (
    <section>
      <header>
        <h1>Lyrical</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/songs/new">Add new song</Link>
          </li>
        </ul>
      </nav>
      {props.children}
    </section>
  )
}

export default Home
