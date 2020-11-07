import React from 'react'
import styled from 'styled-components'

const BlocksContainerElement = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform ease-in-out 300ms;

  &.active {
    transform: translateX(0);
  }
  &.next {
    transform: translateX(100%);
  }
  &.previous {
    transform: translateX(-100%);
  }
`

export default function BlocksContainer(props) {
  return (
    <BlocksContainerElement {...props}>
      <h3>{props.title}</h3>
      {props.children}
    </BlocksContainerElement>
  )
}
