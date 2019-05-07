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
  return (
    <div className="jsx-HomePage">
      <Navbar />

      <Route path={`${props.match.path}/mac`} render={(props) => <SubNavbar {...props} menu="mac" />} />
      <Route path={`${props.match.path}/ipad`} render={(props) => <SubNavbar {...props} menu="ipad" />} />
      <Route path={`${props.match.path}/iphone`} render={(props) => <SubNavbar {...props} menu="iphone" />} />
      <Route path={`${props.match.path}/watch`} render={(props) => <SubNavbar {...props} menu="watch" />} />
      <Route path={`${props.match.path}/tv`} render={(props) => <SubNavbar {...props} menu="tv" />} />
      <Route path={`${props.match.path}/music`} render={(props) => <SubNavbar {...props} menu="music" />} />
    </div>
  )
}

/**
 * Export component
 */

module.exports = HomePage
