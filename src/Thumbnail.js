import React from 'react'
import styled from 'styled-components'

const ThumbnailElement = styled.div`
  display: block;
  margin: 0 40px;
  position: relative;
  width: auto;
  height: 100px;
  text-align: center;
  opacity: 0.5;
  border: #ffffff44 solid 3px;
  border-radius: 2px;
  transition: opacity 300ms;
  cursor: pointer;

  &.active {
    opacity: 1;
  }

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`

export default function Thumbnail(props) {
  const { data } = props

  return (
    <ThumbnailElement {...props}>
      <img src={data} />
    </ThumbnailElement>
  )
}
