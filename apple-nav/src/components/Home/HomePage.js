'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const shared = require('../shared/index')

/**
 * Constants
 */

const Route = react_router_dom.Route
const Navbar = shared.Navbar
const SubNavbar = shared.SubNavbar

/**
 * Define component
 */

function HomePage(props) {
  document.title = `${props.menu} - Apple`

  return (
    <div className="jsx-HomePage">
      <Navbar />

      <Route path="/mac" render={(props) => <SubNavbar {...props} menu="mac" />} />
      <Route path="/ipad" render={(props) => <SubNavbar {...props} menu="ipad" />} />
      <Route path="/iphone" render={(props) => <SubNavbar {...props} menu="iphone" />} />
      <Route path="/watch" render={(props) => <SubNavbar {...props} menu="watch" />} />
      <Route path="/tv" render={(props) => <SubNavbar {...props} menu="tv" />} />
      <Route path="/music" render={(props) => <SubNavbar {...props} menu="music" />} />
      <Route path="/support" render={(props) => <SubNavbar {...props} menu="support" />} />
    </div>
  )
}

/**
 * Export component
 */

module.exports = HomePage
