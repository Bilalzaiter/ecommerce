import baseUrl from '../Api/BaseURL'

const UseDeleteData = async (url, parmas) => {
    const res = await baseUrl.delete(url, parmas);
    return res.data;
}

export default UseDeleteData;