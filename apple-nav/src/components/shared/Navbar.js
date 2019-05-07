'use strict'

/**
 * Dependencies
 */

const React = require('react')
const react_router_dom = require('react-router-dom')
const styles = require('./styles/index')
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
      <styles.NavbarStyle>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between align-items-center">
                  <img src="logo.svg" width="45px" height="45px" />

                  <Nav path="mac" text="Mac" />
                  <Nav path="ipad" text="iPad" />
                  <Nav path="iphone" text="iPhone" />
                  <Nav path="watch" text="Watch" />
                  <Nav path="tv" text="TV" />
                  <Nav path="music" text="Music" />
                  <Nav path="support" text="Support" />

                  <img src="search.svg" width="45px" height="45px" />
                  <img src="cart.svg" width="45px" height="45px" />
                </div>
              </div>

              {/*
              <div className="row">
                <div className="col-12">
                  <div className="styles-SubNavbar">
                    <Route path="/mac" to={SubNavbar} />
                    <Route path="/ipad" to={SubNavbar} />
                    <Route path="/iphone" to={SubNavbar} />
                    <Route path="/watch" to={SubNavbar} />
                    <Route path="/tv" to={SubNavbar} />
                    <Route path="/music" to={SubNavbar} />
                    <a href="https://support.apple.com/" target="_blank">Support</a>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </styles.NavbarStyle>
    </header>
  )
}

/**
 * Export component
 */

module.exports = Navbar
