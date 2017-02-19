// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

import App from './App'
import Lobby from './containers/Lobby'
import SelectWho from './containers/SelectWho'
import GuessWho from './containers/GuessWho'
import GameOver from './containers/GameOver'
import StartGame from './containers/StartGame'
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Lobby} />
          <Route path="select_who/:gameId" component={SelectWho} />
          <Route path="guess_who/:gameId"
          component={GuessWho}/>
          <Route path="game_over/:gameId"
          component={GameOver}/>
          <Route path="start_game/:gameId"
          component={StartGame}/>
          // <Route path="/sign-up" component={SignUp} />
        // <Route path="/sign-in" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
