'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function Nav(props) {
  return (
    <styles.NavStyle>
      {props.text}
    </styles.NavStyle>
  )
}

/**
 * Export component
 */

module.exports = Nav
