import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import history from './history'

const App = () => (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
