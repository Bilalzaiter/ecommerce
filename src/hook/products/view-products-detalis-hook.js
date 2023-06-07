import  { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetOneProduct, GetProductLike, } from '../../redux/actions/ProductsAction';
import mobile from '../../assets/images/mobile.png'
import { GetOneCategory } from '../../redux/actions/CategoryAction';
import { GetOneBrand } from '../../redux/actions/BrandAction';
const ViewProductsDetalisHook = (prodID) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetOneProduct(prodID))
    }, [dispatch, prodID])

    const oneProducts = useSelector((state) => state.allproducts.oneProduct)
    const oneCategory = useSelector((state) => state.allCategory.oneCategory)
    const oneBrand = useSelector((state) => state.allBrand.oneBrand)
    const productLike = useSelector((state) => state.allproducts.productLike)
    //to show products item
    let item = useMemo(() => {
        return [];
      }, [])
    if (oneProducts.data)
        item = oneProducts.data;
    else
        item = []

    useEffect(() => {
        if (item.category)
            dispatch(GetOneCategory(item.category))
        if (item.brand)
            dispatch(GetOneBrand(item.brand))
        if (item.category)
            dispatch(GetProductLike(item.category))

    }, [dispatch,item])


    //to view images gallery
    let images = []
    if (item.images)
        images = item.images.map((img) => { return { original: img } })
    else {
        images = [{ original: `${mobile}` }]
    }


    //to show category item
    let cat = [];
    if (oneCategory.data)
        cat = oneCategory.data;
    else
        cat = []

    //to show brand item
    let brand = [];
    if (oneBrand.data)
        brand = oneBrand.data;
    else
        brand = []

    let prod = []
    if (productLike)
        prod = productLike.data;
    else
        prod = []
    return [item, images, cat, brand, prod]
}

export default ViewProductsDetalisHook