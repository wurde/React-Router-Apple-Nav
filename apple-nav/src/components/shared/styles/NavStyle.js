'use strict'

/**
 * Dependencies
 */

const styled_components = require('styled-components')

/**
 * Constants
 */

const styled = styled_components.default

/**
 * Define style component
 */

const NavStyle = styled.div(() => `
  padding: 10px 10px;
  color: #FFF;

  a {
    color: inherit;
    text-decoration: inherit;
  }
  a:hover {
    opacity: .65;
  }
`)

/**
 * Export style component
 */

module.exports = NavStyle
