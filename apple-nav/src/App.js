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

/**
 * Import component styles
 */

require('./App.scss')

/**
 * Define component
 */

function App() {
  return (
    <div className="jsx-App">
      <BrowserRouter>
        <components.Navbar />
      </BrowserRouter>
    </div>
  )
}

/**
 * Export component
 */

module.exports = App
