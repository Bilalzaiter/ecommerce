import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { GetAllCategory } from '../../redux/actions/CategoryAction';
import { GetAllBrand } from './../../redux/actions/BrandAction';
import ViewSearchProductsHook from './../products/view-search-products-hook';

const SidebarSearchHook = () => {
    const [getProduct] = ViewSearchProductsHook();
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        const get =  () => {
            dispatch(GetAllCategory());
            dispatch(GetAllBrand());
        }
        get();
    }, [dispatch])

    //to get state from redux
    const allCat = useSelector(state => state.allCategory.category)
    //to get state from redux
    const allBrand = useSelector(state => state.allBrand.brand)

    //to get category
    let category = [];
    if (allCat.data)
        category = allCat.data

    //to get category
    let brand = [];
    if (allBrand.data)
        brand = allBrand.data
        var queryCat = useRef(localStorage.getItem("catChecked") || "")
    const [catChecked, setCatChecked] = useState([])
    //when user press any category
    const clickCategory = (e) => {
        let value = e.target.value
        if (value === "0") {
            setCatChecked([])
        }
        else {
            if (e.target.checked === true) {
                setCatChecked([...catChecked, value])
            } else if (e.target.checked === false) {
                const newArry = catChecked.filter((e) => e !== value)
                setCatChecked(newArry)
            }
        }

    }
    useEffect(() => {
        queryCat.current = catChecked.map(val => "category[in][]=" + val).join("&");
        localStorage.setItem("catChecked", queryCat.current);
        setTimeout(() => {
          getProduct();
        }, 1000);
      }, [getProduct, catChecked,queryCat ]);


      const [brandChecked, setBrandChecked] = useState([]);
      const queryBrand = useRef(localStorage.getItem("brandChecked") || "");
    //when user press any category
    const clickBrand = (e) => {
        let value = e.target.value
        if (value === "0") {
            setBrandChecked([])
        }
        else {
            if (e.target.checked === true) {
                setBrandChecked([...brandChecked, value])
            } else if (e.target.checked === false) {
                const newArry = brandChecked.filter((e) => e !== value)
                setBrandChecked(newArry)
            }
        }
    }

    useEffect(() => {
        queryBrand.current = brandChecked.map(val => "brand[in][]=" + val).join("&");
        localStorage.setItem("brandChecked", queryBrand.current);
        setTimeout(() => {
          getProduct();
        }, 1000);
      }, [getProduct, brandChecked,queryBrand ]);

    const [From, setPriceFrom] = useState(0)
    const [To, setToFrom] = useState(0)

    const priceFrom = (e) => {
        localStorage.setItem("priceFrom", e.target.value)

        setPriceFrom(e.target.value)
    }
    const priceTo = (e) => {
        localStorage.setItem("priceTo", e.target.value)
        setToFrom(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            getProduct();
        }, 1000);
    }, [getProduct,From, To])




    return [category, brand, clickCategory, clickBrand, priceFrom, priceTo]

}

export default SidebarSearchHook