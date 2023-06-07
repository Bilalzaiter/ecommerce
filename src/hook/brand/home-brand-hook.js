import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GetAllBrand } from '../../redux/actions/BrandAction'

const HomeBrandHook = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetAllBrand());
    }, [dispatch])
    //Get last brand state from redux
    const brand = useSelector(state => state.allBrand.brand)
    //Get last loading state from redux
    const loading = useSelector(state => state.allBrand.loading)
   

    return [brand, loading]
};

export default HomeBrandHook;
