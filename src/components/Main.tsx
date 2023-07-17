import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill'

const Main = props => {
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >

          <h2 className="major">Los Gatos</h2>
          <p>
          Que gatos tan elegantes!
          </p>
        <span className="image main">

            <StaticImage src="../../static/assets/gato01.jpg" alt="Intro" />
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/gato02.jpg" alt="Intro" />
            <StaticImage formats={['auto', 'webp']} src="../../static/assets/gato03.jpg" alt="Intro" />
        </span>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >

          <h2 className="major">No Hay Gatos Aquí</h2>

        <span className="image main">

            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic02.jpg" alt="Work" />

        </span>
        <p>
          No vas a encontrar gatos en esta página.
        </p>
        <p>
          Por qué viniste aquí?
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >

          <h2 className="major">Acerca De</h2>

        <span className="image main">

            <StaticImage formats={['auto', 'webp']} src="../../static/assets/pic03.jpg" alt="About" />

        </span>
        <p>
          Me gustan los gatos, especialmente los que tienen sombreros.
        </p>
        {close}
      </article>

      
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
