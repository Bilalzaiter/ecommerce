import React from 'react'
import BrandcardContainer from '../../components/Brand/BrandcardContainer'
import Pagination from '../../components/Utility/Pagination'


const AllBrandsPage = () => {
    return (
        <div style={{ minHeight: '600px' }}>
            <BrandcardContainer />
            <Pagination />
        </div>
    )
}

export default AllBrandsPage
