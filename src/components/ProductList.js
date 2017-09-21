import React from 'react'
import PropTypes from 'prop-types'

const ProductList = props => (
  <div>
    <h2>Product List</h2>
    <ul>
      {props.products &&
        props.products.map(product => (
          <li key={product.id} onClick={() => props.onProductSelect(product)}>
            {product.name} - {product.brand}
          </li>
        ))}
    </ul>
  </div>
)

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductSelect: PropTypes.func.isRequired
}

export default ProductList
