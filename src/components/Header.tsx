import React from 'react'
import PropTypes from 'prop-types'
import Bio from './bio'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <Bio className="icon" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Gatos Con Sombreros</h1>
        <p>
          Mira estos gatos
          <br />
          ¡Que adorable!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Los Gatos
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            No hay gatos aquí
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Acerca de
          </a>
        </li>
        
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
