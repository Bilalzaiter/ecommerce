import React from 'react'
import Slider from '../../components/Home/Slider'
import Homecategory from '../../components/Home/Homecategory'
import DiscountSection from '../../components/Home/DiscountSection'
import HomeBrands from '../../components/Home/HomeBrands'
import HomeProducts from '../../components/Home/HomeProducts'




const HomePage = () => {
    return (
        <div>
            <Slider />
            <Homecategory btntitle="المزيد" title="الأصناف" pathText="/allcategory"/>
            <HomeProducts btntitle="المزيد" pathText="/allproducts" title="المنتجات"/>
            <DiscountSection />
            <Homecategory btntitle="المزيد" title="الاكثر مبيعا" pathText="/products"/>
            <Homecategory btntitle="المزيد" title="الاكثر اختيارا" pathText="/products"/>
            <HomeBrands />
        </div>
    )
}

export default HomePage
