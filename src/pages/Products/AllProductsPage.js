import React from 'react'
import CardProductsContainer from '../../components/Products/CardProductsContainer'

const AllProductsPage = () => {
  return (
    <div style={{ minHeight: '500px' }}>
    <CardProductsContainer title="المتنجات" btntitle="المزيد" pathText="/allproducts"/>
</div>  )
}

export default AllProductsPage
