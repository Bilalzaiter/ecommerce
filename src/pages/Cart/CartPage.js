import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartItem from '../../components/Cart/CartItem'
import CartCheckout from '../../components/Cart/CartCheckout'

const CartPage = () => {
    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Col>

                <Col xs="6" md="3">
                    <CartCheckout />
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage