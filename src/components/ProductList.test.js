import React from 'react'
import { shallow } from 'enzyme'
import ProductList from './ProductList'

test('should render <ProductList />', () => {
  const wrapper = shallow(<ProductList />)
  expect(wrapper).toBeDefined()
})
