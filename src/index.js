/* eslint no-undef: 0 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

// Global CSS
import './Assets/Stylesheets/Main.scss'

// Router
import AppRouter from './Router'

// Store
import store from 'Config/Store'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    )
  })
}
