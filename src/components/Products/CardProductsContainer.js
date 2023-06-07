import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductCard from './ProductCard'
import favOff from "../../assets/images/favOff.png"
import prod1 from "../../assets/images/prod1.png"
import mobile from "../../assets/images/mobile.png"
import rate from "../../assets/images/rate.png"
import Subtitle from '../Utility/Subtitle'
import Pagination from '../Utility/Pagination'

const PAGE_SIZE = 4;

const CardProductsContainer = ({ title, btntitle, pathText }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const productCardInfo = [
        { rate: rate, img: favOff, img1: mobile },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
        { rate: rate, img: favOff, img1: prod1 },
    ]
    const totalPages = Math.ceil(productCardInfo.length / PAGE_SIZE);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = Math.min(startIndex + PAGE_SIZE, productCardInfo.length);

    const displayedProductCardInfo = productCardInfo.slice(startIndex, endIndex);
    return (
        <Container>
            <Subtitle title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex flex-row justify-content-between'>
                {
                    displayedProductCardInfo.map((item) => {
                        return <ProductCard rate={item.rate} img={item.img} img1={item.img1} />
                    })
                }
            </Row>
            <div className="d-flex justify-content-center my-3">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

        </Container>
    )
}

export default CardProductsContainer
