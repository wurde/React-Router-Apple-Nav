'use strict'

/**
 * Dependencies
 */

const React = require('react')
const styles = require('./styles/index')

/**
 * Define component
 */

function SubNavbar(props) {
  document.title = `${props.menu} - Apple`

  return (
    <styles.SubNavbarStyle>
      <div className="row">
        <div className="col-12">
          <div className="container">

              {(props.menu === 'mac') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    MacBook
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    MacBook Air
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    MacBook Pro
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iMac
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iMac Pro
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Mac Pro
                  </div>
                </div>
              }

              {(props.menu === 'ipad') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPad Pro
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPad Air
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPad
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPad Mini
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Compare
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Pencil
                  </div>
                </div>
              }

              {(props.menu === 'iphone') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPhone Xs
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPhone Xr
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPhone 8
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPhone 7
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Compare
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Card
                  </div>
                </div>
              }

              {(props.menu === 'watch') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Watch Series 4
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Watch Nike+
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Watch Hermes
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Watch Series 3
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    WatchOS
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Bands
                  </div>
                </div>
              }

              {(props.menu === 'tv') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple TV App
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple TV+
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple TV 4k
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple TV HD
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Airplay
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Accessories
                  </div>
                </div>
              }

              {(props.menu === 'music') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Apple Music
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iTunes
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    HomePod
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    AirPods
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    iPod touch
                  </div>

                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Music Accessories
                  </div>
                </div>
              }

              {(props.menu === 'support') &&
                <div className="row justify-content-center">
                  <div className="col-6 col-md-2 py-2 d-flex justify-content-center align-items-center">
                    Support
                  </div>
                </div>
              }

          </div>
        </div>
      </div>
    </styles.SubNavbarStyle>
  )
}

/**
 * Export component
 */

module.exports = SubNavbar
