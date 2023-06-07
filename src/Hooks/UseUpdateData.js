import baseUrl from '../Api/BaseURL'


const UseInUpdateDataWithImage = async (url, parmas) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.put(url, parmas, config);
    console.log(res.status)
    return res;
}

const UseInsUpdateData = async (url, parmas) => {
    const res = await baseUrl.put(url, parmas);
    return res;
}

export { UseInUpdateDataWithImage, UseInsUpdateData };