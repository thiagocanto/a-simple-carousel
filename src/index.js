import React from 'react'
import styles from './styles.module.css'

import CarouselNavigation, { NavigationElement } from './CarouselNavigation'
import BlocksContainer from './BlocksContainer'
import Thumbnail from './Thumbnail'
import ImageViewer from './ImageViewer'

export class Carousel extends React.Component {
  state = {
    blocks: [],
    blockIndex: 0,
    active: 0
  }

  static getDerivedStateFromProps({ data }) {
    let blocks = []

    if (data) {
      blocks = data
    }

    return { blocks }
  }

  handleIndexClick = (event) => {
    let el = event.target
    while (!el.dataset.index) el = el.parentNode

    this.setState({
      active: +el.dataset.index
    })
  }

  handleNextBlock = (event) => {
    if (event.target.getAttribute('disabled') !== null) return

    const blockIndex = ++this.state.blockIndex
    const active = Math.floor(
      Math.random() * this.state.blocks[blockIndex].images.length
    )

    this.setState({
      blockIndex,
      active
    })
  }

  handlePreviousBlock = (event) => {
    if (event.target.getAttribute('disabled') !== null) return

    const blockIndex = --this.state.blockIndex
    const active = Math.floor(
      Math.random() * this.state.blocks[blockIndex].images.length
    )

    this.setState({
      blockIndex,
      active
    })
  }

  render() {
    const { blocks, blockIndex, active } = this.state

    return (
      <div className={styles.carouselContainer}>
        <div className={styles.carouselView}>
          <ImageViewer data={blocks[blockIndex].images[active]} />
        </div>

        {blocks.map((block, index) => {
          const classes = []
          classes.push(
            index === blockIndex
              ? 'active'
              : index > blockIndex
              ? 'next'
              : 'previous'
          )

          return (
            <BlocksContainer
              key={index}
              className={classes.join(' ')}
              title={block.title}
            >
              <div className={styles.carouselThumbnailsContainer}>
                {block.images.map((image, imageIndex) => {
                  return (
                    <Thumbnail
                      className={imageIndex === active ? 'active' : null}
                      onClick={this.handleIndexClick}
                      key={imageIndex}
                      data-index={imageIndex}
                      data={image}
                    />
                  )
                })}
              </div>
            </BlocksContainer>
          )
        })}

        <CarouselNavigation>
          <NavigationElement
            disabled={blockIndex === 0}
            onClick={this.handlePreviousBlock}
          >
            &lt;
          </NavigationElement>
          <NavigationElement
            disabled={blockIndex === blocks.length - 1}
            onClick={this.handleNextBlock}
          >
            &gt;
          </NavigationElement>
        </CarouselNavigation>
      </div>
    )
  }
}
