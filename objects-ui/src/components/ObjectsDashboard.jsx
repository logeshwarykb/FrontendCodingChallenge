import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getObjects } from "../store/actions/ObjectAction"
import ObjectAdd from "./ObjectAdd"
import ObjectList from "./ObjectList"

function ObjectsDashboard(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getObjects())
    }, [])

    return(
        <div>
            <h1>ObjectsDashboard</h1>
            <hr />
            <ObjectAdd />
            <hr />
        <ObjectList />
        </div>
    )
}

export default ObjectsDashboard
