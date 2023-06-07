import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { GetAllCategory, GetAllCategoryPage } from '../../redux/actions/CategoryAction'

const AllCategoryHook = () => {
    const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        dispatch(GetAllCategory(6));
    }, [])

    //to get state from redux
    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)

    console.log(category)

    //to get page count
    let pageCount = 0;
    if (category.paginationResult)
        pageCount = category.paginationResult.numberOfPages

    //when press pagination
    const getPage = (page) => {
        dispatch(GetAllCategoryPage(page));
        console.log(page)
    }

    return [category,loading,pageCount,getPage]
};

export default AllCategoryHook;
