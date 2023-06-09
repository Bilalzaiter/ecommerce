import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductDetalis from '../../components/Products/ProductDetalis'
import RateContainer from '../../components/Rate/RateContainer'
import ViewProductsDetalisHook from './../../hook/products/view-products-detalis-hook';
import CategoryHeader from '../../components/Category/CategoryHeader'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
const ProductDetalisPage = () => {
    const { id } = useParams();
    const [ prod] = ViewProductsDetalisHook(id);
    if (prod)
        var items = prod.slice(0, 4)
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer />
                <CardProductsContainer products={items} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
