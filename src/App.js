import React, { Component } from 'react'
import ProductList from './components/ProductList'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: [
        { id: 1, name: 'AirMax 90', brand: 'Nike' },
        { id: 2, name: 'Yeezy', brand: 'Adidas' },
        { id: 3, name: 'Classic', brand: 'Reebok' }
      ]
    }
  }
  render () {
    return (
      <div>
        <ProductList products={this.state.products} />
      </div>
    )
  }
}

export default App
