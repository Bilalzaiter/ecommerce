import React from 'react'
import Subtitle from '../Utility/Subtitle'
import { Container, Row } from 'react-bootstrap'
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import BrandCard from '../Brand/BrandCard'

const HomeBrands = () => {
    return (
        <Container>
            <Subtitle btntitle="المزيد" pathText="/allbrands" title="الماركات" />
            <Row >
                <BrandCard background="dodgerblue" img={brand1}/>
                <BrandCard background="gold" img={brand2}/>
                <BrandCard background="darkcyan" img={brand3}/>
                <BrandCard background="orange" img={brand1}/>
                <BrandCard background="darkturquoise" img={brand2}/>
                <BrandCard background="lightsalmon" img={brand3}/>
            </Row>
        </Container>
    )
}

export default HomeBrands
