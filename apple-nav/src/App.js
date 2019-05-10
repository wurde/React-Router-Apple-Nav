'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const components = require('./components/index')

/**
 * Constants
 */

const BrowserRouter = react_router_dom.BrowserRouter
const Route = react_router_dom.Route
const HomePage = components.HomePage

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <BrowserRouter>
      <Route to="/" component={HomePage} />
    </BrowserRouter>
  )
}

/**
 * Export component
 */

module.exports = App
