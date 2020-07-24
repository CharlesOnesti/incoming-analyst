import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Quiz from './containers/Quiz'
import history from './history'

const App = () => (
  <BrowserRouter history={history}>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
