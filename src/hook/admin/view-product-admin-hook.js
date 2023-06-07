import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts } from '../../redux/actions/ProductsAction';
import { GetAllProductsPage } from '../../redux/actions/ProductsAction';

const ViewProductAdminHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllProducts(8))
    }, [dispatch])


    const onPress = async (page) => {
        await dispatch(GetAllProductsPage(page, 8))
    }
    let items = []; let pagination = [];
    const allProducts = useSelector((state) => state.allproducts.allProducts)
    try {

        if (allProducts.data)
            items = allProducts.data;
        else
            items = []

        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
            pagination = []
    } catch (e) { }
    return [items, pagination, onPress]

}

export default ViewProductAdminHook