import React from 'react'
import Subtitle from '../Utility/Subtitle'
import { Container, Row } from 'react-bootstrap'
import prod1 from '../../assets/images/prod1.png'
import rate from '../../assets/images/rate.png'
import favOff from '../../assets/images/favOff.png'
import ProductCard from '../Products/ProductCard'

const HomeProducts = ({title,pathText,btntitle}) => {
    return (
        <Container>
            <Subtitle btntitle={btntitle} pathText={pathText} title={title} />
            <Row >
                <ProductCard rate={rate} img={favOff} img1={prod1} />
                <ProductCard rate={rate} img={favOff} img1={prod1} />
                <ProductCard rate={rate} img={favOff} img1={prod1} />
                <ProductCard rate={rate} img={favOff} img1={prod1} />
            </Row>
        </Container>
    )
}

export default HomeProducts
