'use strict'

/**
 * Dependencies
 */

const React = require('react')
const shared = require('../shared/index')

/**
 * Constants
 */

const Navbar = shared.Navbar

/**
 * Define component
 */

function HomePage() {
  return (
    <div className="jsx-HomePage">
      <Navbar />
    </div>
  )
}

/**
 * Export component
 */

module.exports = HomePage
