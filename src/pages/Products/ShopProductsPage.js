import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Col, Container, Row } from 'react-bootstrap'
import SearchCountResult from '../../components/Utility/SearchCountResult'
import SideFilter from '../../components/Utility/SideFilter'
import CardProductsContainer from '../../components/Products/CardProductsContainer'

const ShopProductsPage = () => {
    return (
        <div  style={{minHeight:'670px'}} >
            <CategoryHeader />
            <Container>
                <SearchCountResult title="400 نتيجة بحث" />

                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'> 
                    <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                        <CardProductsContainer title="" btntitle="" pathText=""/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ShopProductsPage
