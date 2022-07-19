
import React, { useEffect } from 'react'
import axios from 'axios'
export default function useFetch(url) {
    const [list, setList] = React.useState()
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    useEffect(() => {
        fetchData()
    }, [])
    async function fetchData() {
        try {
            const response = await axios.get(url)
            setList(response.data)
            setIsLoading(false)

        } catch (err) {
            setError(err.message)
            setIsLoading(false)
        }
    }
   
    return { list, isLoading, error }
}