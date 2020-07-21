import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import history from './history'

const App = () => (
  <BrowserRouter history={history} basename="/">
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
