import React from 'react'

import { Carousel } from 'a-simple-carousel'
import 'a-simple-carousel/dist/index.css'

const DUMMY_DATA = [
  {
    title: 'Samson Castelino',
    images: [
      'https://cdnb.artstation.com/p/assets/images/images/031/846/281/large/samson-castelino-enchanted-castle.jpg?1604766960',
      'https://cdnb.artstation.com/p/assets/images/images/025/774/239/large/samson-castelino-compressed.jpg?1586881832'
    ]
  },
  {
    title: 'Yare Yue',
    images: [
      'https://cdnb.artstation.com/p/assets/images/images/029/092/381/large/yare-yue-waterfall.jpg?1596445035',
      'https://cdna.artstation.com/p/assets/images/images/029/824/292/large/yare-yue-cloud.jpg?1598760266',
      'https://cdna.artstation.com/p/assets/images/images/025/309/152/large/yare-yue-dong.jpg?1585380763'
    ]
  },
  {
    title: 'Valentina Remenar',
    images: [
      'https://cdnb.artstation.com/p/assets/images/images/031/823/381/large/valentina-remenar-sinking-in-by-valentina-remenar.jpg?1604682874',
      'https://cdna.artstation.com/p/assets/images/images/023/463/696/large/valentina-remenar-two-worlds-by-valentina-remenar.jpg?1579279334',
      'https://cdna.artstation.com/p/assets/images/images/019/319/352/large/valentina-remenar-paradise-by-valentina-remenar.jpg?1562946885',
      'https://cdna.artstation.com/p/assets/images/images/009/203/744/large/valentina-remenar-mother-nature-by-valentina-remenar.jpg?1517678599'
    ]
  },
  {
    title: 'Seung Eun Kim',
    images: [
      'https://cdna.artstation.com/p/assets/images/images/027/691/548/large/seung-eun-kim-seung-eun-kim.jpg?1592270075',
      'https://cdnb.artstation.com/p/assets/images/images/029/252/821/large/seung-eun-kim-untitled-1d.jpg?1596948490',
      'https://cdnb.artstation.com/p/assets/images/images/031/836/587/large/seung-eun-kim-untitled-2b.jpg?1604726486']
  }
]

class App extends React.Component{
  url = ''

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    if(!this.url) {
      this.setState({ isLoaded: true, data: DUMMY_DATA })
      return
    }

    fetch(this.url)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: result.data
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      })
  }

  render() {
    const {error, isLoaded, data} = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return <Carousel data={data} />
    }
  }
}

export default App
