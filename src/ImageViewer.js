/* global Image */
import React from 'react'

export default class ImageViewer extends React.Component {
  state = {
    isLoading: false,
    imageUrl: ''
  }

  static getDerivedStateFromProps({ data }) {
    let imageUrl = ''

    if (data) {
      imageUrl = data
    }

    return { imageUrl }
  }

  componentDidMount() {
    this.createLoader()
  }

  createLoader() {
    this.destroyLoader()

    this.img = new Image()
    this.img.onload = this.handleLoad
    this.img.onerror = this.handleError
    this.img.src = this.state.imageUrl
  }

  destroyLoader() {
    if (this.img) {
      this.img.src = ''
      this.img.onload = null
      this.img.onerror = null
      this.img = null
    }
  }

  handleLoad = (event) => {
    this.destroyLoader()
    this.setState({ isLoading: false })
  }

  handleError = (event) => {
    this.destroyLoader()
    this.setState({ isLoading: true })
  }

  render() {
    const { imageUrl } = this.state
    if (this.state.isLoading) return <div>Loading</div>

    return <img src={imageUrl} />
  }
}
