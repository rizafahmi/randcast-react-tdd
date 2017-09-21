import React from 'react'
import { shallow } from 'enzyme'
import ProductList from './ProductList'

test('should render <ProductList />', () => {
  const wrapper = shallow(<ProductList />)
  expect(wrapper).toBeDefined()
})
test('ProductList should have list of products as ul and li', () => {
  const mockProducts = [
    { id: 1, name: 'Mock product 1', brand: 'MockBrandA' },
    { id: 2, name: 'Mock product 2', brand: 'MockBrandB' },
    { id: 3, name: 'Mock product 3', brand: 'MockBrandC' }
  ]

  const wrapper = shallow(<ProductList products={mockProducts} />)
  expect(wrapper.find('li').length).toEqual(mockProducts.length)
})
