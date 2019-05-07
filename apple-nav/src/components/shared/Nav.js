'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')
const react_router_dom = require('react-router-dom')

/**
 * Constants
 */

const Link = react_router_dom.Link

/**
 * Define component
 */

function Nav(props) {
  return (
    <styles.NavStyle>
      <Link to={props.path}>
        {props.text}
      </Link>
    </styles.NavStyle>
  )
}

/**
 * Export component
 */

module.exports = Nav
