'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

function Navbar(props) {
  return (
    <div>
      {props.text}
    </div>
  )
}

/**
 * Export component
 */

module.exports = Navbar
