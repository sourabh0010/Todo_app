import React, { useDispatch, useState, useEffect } from 'react'
import axios from "axios"

export const useFetch = () => {
    // const dispatch =useDispatch()
    const [url, setUrl] = useState('')
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    useEffect(() => {
        if(url){
        setLoading(true)
        axios.get(url).then((res) => {
            let { data } = res;
            setLoading(false)
            setData(data)
            // dispatch({ type: "Fetch_Data", payload: data });   
        }).catch((err) => {
            setError(err)
        });
    }

    }, [url])

    return [url,data, error, loading,setUrl]

}