import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import theme from "styled-theming";
import { Context } from './App'

const Container = styled.div`
  padding: 1.5em
  h1, h2, h6 {
    text-align: center
  }
  p, dl, dd, dt {
    color: #fff
  }
`



const Section = ({ header, subheader, children, bgColor, primary }) => {
  return (
    <Container style={{ backgroundColor: primary ? '#443322' : bgColor }}>

      {typeof header === 'function' ? header(theme) : <h1>{header}</h1>}
      <h6>{subheader || 'Sub Header'}</h6>

      {typeof children === 'function' ? children(theme) : children}

    </Container>
  )
}

Section.defaultProps = {
  bgColor: '#ee2244',
  primary: false
}

export default Section