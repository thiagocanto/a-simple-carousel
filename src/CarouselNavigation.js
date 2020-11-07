import React from 'react'
import styled, { css } from 'styled-components'

const CarouselNavigationElement = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`
export const NavigationElement = styled.div`
  font-size: 5rem;
  margin: 10px;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
    `}
`

export default function CarouselNavigation(props) {
  return <CarouselNavigationElement>{props.children}</CarouselNavigationElement>
}
