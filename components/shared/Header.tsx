import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import ActiveLink from './ActiveLink'

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`

const Header = () => (
  <Container>
    Memorise the boxes that light up, then try to select them again.
  </Container>
)

export default Header
