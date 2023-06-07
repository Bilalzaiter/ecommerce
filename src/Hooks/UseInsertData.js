import baseUrl from '../Api/BaseURL'


const UseInsertDataWithImage = async (url, parmas) => {
    const config={
        headers:{"Content-Type":"multipart/form-data"}
    }
    const res = await baseUrl.post(url, parmas ,config);
    console.log(res.status)
    return res;
}

const UseInsertData = async (url, parmas) => {
    const res = await baseUrl.post(url, parmas);
    return res;
}

export { UseInsertData, UseInsertDataWithImage };