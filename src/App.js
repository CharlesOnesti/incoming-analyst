import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import history from './history'

const App = () => (
  <Router history={history} basename="https://charlesonesti.github.io/Portfolio/">
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
