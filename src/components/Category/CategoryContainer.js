import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import clothe from '../../assets/images/clothe.png'
import cat2 from '../../assets/images/cat2.png'
import labtop from '../../assets/images/labtop.png'
import pic from '../../assets/images/pic.png'
import sale from '../../assets/images/sale.png'
import Pagination from '../Utility/Pagination'

const PAGE_SIZE = 12; 

const CategoryContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const categoryInfo =[
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: clothe , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: cat2 , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: labtop , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: pic , background : "#F4DBA4" },
            {title : "اجهزة منزلية" , img: sale , background : "#F4DBA4" },
]
const totalPages = Math.ceil(categoryInfo.length / PAGE_SIZE);

const handlePageChange = (page) => {
    setCurrentPage(page);
};

const startIndex = (currentPage - 1) * PAGE_SIZE;
const endIndex = Math.min(startIndex + PAGE_SIZE, categoryInfo.length);

const displayedCategoryInfo = categoryInfo.slice(startIndex, endIndex);

return (
    <Container>
        <div className="admin-content-text mt-2">كل التصنيفات</div>
        <Row className="my-2 d-flex justify-content-between">
            {displayedCategoryInfo.map((item) => {
                return (
                    <CategoryCard
                        title={item.title}
                        img={item.img}
                        background={item.background}
                    />
                );
            })}
        </Row>
        <div className="d-flex justify-content-center my-3">
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    </Container>
);
};

export default CategoryContainer
