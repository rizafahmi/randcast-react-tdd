import React from 'react'
import PropTypes from 'prop-types'

const ProductList = props => (
  <div>
    <h2>Product List</h2>
    <ul>
      {props.products &&
        props.products.map(product => <li key={product.id}>{product.name}</li>)}
    </ul>
  </div>
)

ProductList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ProductList
