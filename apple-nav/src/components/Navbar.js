'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const Nav = require('./Nav')
const SubNavbar = require('./SubNavbar')

/**
 * Constants
 */

const Route = react_router_dom.Route

/**
 * Define component
 */

function Navbar(props) {
  return (
    <header>
      <div className="styles-MainNavbar">
        {/* TODO add apple brand */}

        <Nav text="Mac" />
        <Nav text="iPad" />
        <Nav text="iPhone" />
        <Nav text="Watch" />
        <Nav text="TV" />
        <Nav text="Music" />
        <Nav text="Support" />

        {/* TODO add search icon */}
        {/* TODO add cart icon */}
      </div>

      <div className="styles-SubNavbar">
        <Route path="/mac" to={SubNavbar} />
        <Route path="/ipad" to={SubNavbar} />
        <Route path="/iphone" to={SubNavbar} />
        <Route path="/watch" to={SubNavbar} />
        <Route path="/tv" to={SubNavbar} />
        <Route path="/music" to={SubNavbar} />
        <a href="https://support.apple.com/" target="_blank">Support</a>
      </div>
    </header>
  )
}

/**
 * Export component
 */

module.exports = Navbar
