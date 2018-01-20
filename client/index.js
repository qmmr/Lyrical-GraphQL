import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import Home from './components/Home'
import SongForm from './components/SongForm'
import SongList from './components/SongList'

const client = new ApolloClient({})
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={SongList} />
          <Route path="song/add" component={SongForm} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
