import axios from "axios"
import { API_SERVER_URL_DEV } from "../../../config"

export const getObjects = ()=>async(dispatch)=>{

    const response = await axios.get(`${API_SERVER_URL_DEV}/objects`)

    dispatch({
        type: 'FETCH_OBJECTS',
        payload : response.data
    })
}

export const addObject = (obj)=>async(dispatch)=>{

    const response = await axios.post(`${API_SERVER_URL_DEV}/objects`, obj)
    dispatch({
        type: 'ADD_OBJECT',
        payload : response.data
    })
}

export const deleteObject = (id) =>async(dispatch)=>{
    await axios.delete(`${API_SERVER_URL_DEV}/objects/${id}`)
    dispatch({
        type: 'DELETE_OBJECT',
        payload : id
    })

}
