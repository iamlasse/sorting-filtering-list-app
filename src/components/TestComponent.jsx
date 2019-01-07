import React from 'react'
import styled from 'styled-components';
import theme from "styled-theming";

const Container = styled.div`
  padding: 1.5em
  h1, h2, h6 {
    text-align: center
  }
  p, dl, dd, dt {
    color: #fff
  }
`
export const Section = ({ header, subheader, children, bgColor, primary }) => {
  return (
    <Container style={{ backgroundColor: primary ? '#ececec' : bgColor }}>

      {typeof header === 'function' ? header(theme) : <h1>{header}</h1>}
      <h6>{subheader || null}</h6>

      {typeof children === 'function' ? children(theme) : children}

    </Container>
  )
}

Section.defaultProps = {
  bgColor: '#f9f9f9',
  primary: false
}

export default Section