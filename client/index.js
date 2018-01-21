import { IndexRoute, Route, Router, hashHistory } from 'react-router'

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import Home from './components/Home'
import React from 'react'
import ReactDOM from 'react-dom'
import SongForm from './components/SongForm'
import SongInfo from './components/SongInfo'
import SongList from './components/SongList'

const client = new ApolloClient({
  dataIdFromObject: o => o.id
})
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongForm} />
          <Route path="songs/:id" component={SongInfo} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
