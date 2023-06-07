import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = ({ onFilterChange }) => {
    const [categoryFilters, setCategoryFilters] = useState({
        all: true,
        appliances: false,
        electronics: false,
        clothing: false,
        furniture: false,
    })
    const [brandFilters, setBrandFilters] = useState({
        all: true,
        apple: false,
        samsung: false,
    })
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000)

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target
        setCategoryFilters((prevFilters) => ({
            ...prevFilters,
            [value]: checked,
        }))
    }

    const handleBrandChange = (e) => {
        const { value, checked } = e.target
        setBrandFilters((prevFilters) => ({
            ...prevFilters,
            [value]: checked,
        }))
    }
    const handlePriceChange = (e) => {
        const { name, value } = e.target
        if (name === 'minPrice') {
            setMinPrice(value)
        } else if (name === 'maxPrice') {
            setMaxPrice(value)
        }
    }

    const handleApplyFilters = () => {
        const selectedCategories = Object.keys(categoryFilters).filter(
            (key) => categoryFilters[key] && key !== 'all'
        )
        const selectedBrands = Object.keys(brandFilters).filter(
            (key) => brandFilters[key] && key !== 'all'
        )
        onFilterChange({
            categories: selectedCategories,
            brands: selectedBrands,
            minPrice: parseInt(minPrice),
            maxPrice: parseInt(maxPrice),
        })
    }
    return (
        <div className="mt-3">
            <Row>
                <div className="d-flex flex-column mt-2">
                    <div className="filter-title">الفئة</div>
                    <div className="d-flex mt-3">
                        <input
                            type="checkbox"
                            value="all"
                            checked={categoryFilters.all}
                            onChange={handleCategoryChange}
                        />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input
                            type="checkbox"
                            value="appliances"
                            checked={categoryFilters.appliances}
                            onChange={handleCategoryChange}
                        />
                        <div className="filter-sub me-2 ">الأجهزة المنزلية</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input
                            type="checkbox"
                            value="electronics"
                            checked={categoryFilters.electronics}
                            onChange={handleCategoryChange}
                        />
                        <div className="filter-sub me-2 ">الإلكترونيات</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input
                            type="checkbox"
                            value="clothing"
                            checked={categoryFilters.clothing}
                            onChange={handleCategoryChange}
                        />
                        <div className="filter-sub me-2 ">الملابس</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input
                            type="checkbox"
                            value="furniture"
                            checked={categoryFilters.furniture}
                            onChange={handleCategoryChange}
                        />
                        <div className="filter-sub me-2 ">الأثاث</div>
                    </div>

                    <div className="filter-title mt-3">الماركة</div>
                    <div className="d-flex mt-3">
                        <input
                            type="checkbox"
                            value="all"
                            checked={brandFilters.all}
                            onChange={handleBrandChange}
                        />
                        <div className="filter-sub me-2 ">الكل</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input
                            type="checkbox"
                            value="apple"
                            checked={brandFilters.apple}
                            onChange={handleBrandChange}
                        />
                        <div className="filter-sub me-2 ">ابل</div>
                    </div>
                    <div className="d-flex mt-2">
                        <input
                            type="checkbox"
                            value="samsung"
                            checked={brandFilters.samsung}
                            onChange={handleBrandChange}
                        />
                        <div className="filter-sub me-2 ">سامسونج</div>
                    </div>
                </div>

                <div className="filter-title mt-3">السعر</div>
                <div className="d-flex align-items-center justify-content-between">
                    <input
                        type="number"
                        placeholder="الحد الأدنى"
                        name="minPrice"
                        value={minPrice}
                        onChange={handlePriceChange}
                        className="price-input ms-2"
                    />
                    <span>-</span>
                    <input
                        type="number"
                        placeholder="الحد الأقصى"
                        name="maxPrice"
                        value={maxPrice}
                        onChange={handlePriceChange}
                        className="price-input me-2"
                    />
                    <button onClick={handleApplyFilters} className="btn btn-primary filter-btn">
                        تطبيق
                    </button>
                </div>            </Row>
        </div>)
}

export default SideFilter
