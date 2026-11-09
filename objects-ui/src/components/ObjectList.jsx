import { useState } from "react"
import { deleteObject } from "../store/actions/ObjectAction"
import { useDispatch, useSelector } from "react-redux"

function ObjectList() {
    const list = useSelector(state => state.objects)
    const dispatch = useDispatch()

    const [page, setPage] = useState(0)
    const [size] = useState(10)
    const [errMsg, setErrMsg] = useState("")
    const totalRecords = list.length
    const totalPages = Math.ceil(totalRecords / size)
    const currentList = list.slice(page * size, page * size + size)

    const onPageChange =(val)=>{
        setPage(val)
    }

    const onDelete = async (id) => {
        try {
            await dispatch(deleteObject(id))
            setErrMsg("")
        }
        catch (err) {
        setErrMsg(err.response?.data?.error || "Operation failed")
        }
    }
    return (
        <div className="container">
            {errMsg !== "" ? <div className="alert alert-danger">{errMsg}</div> : ""}
            <div className="row">
                {
                    currentList?.map((o, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card h-100">
                                <div className="card-header">
                                    {o.name}
                                </div>
                                <div className="card-body">
                                    <p>Color: {o.data === null ? "N/A" : (o.data.color || o.data.Color || "N/A")}</p>
                                    <p>Price: {o.data === null ? "N/A" : (o.data.price || o.data.Price || "N/A")}</p>
                                    <p>CPU: {o.data === null ? "N/A" : (o.data.CPU || o.data["CPU model"] || "N/A")}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(o.id)}>
                                        <i className="bi bi-trash"></i> delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <nav aria-label="Page navigation example" style={{ "alignContent": 'center' }}>
                <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link" onClick={()=>setPage(page-1)}
                        disabled={page === 0}>Previous</button></li>

                    {
                    Array.from({ length: totalPages }, (e, index) => (
                        <li key={index} className="page-item">
                        <button className="page-link" onClick={()=>onPageChange(index)}>{index+1}</button></li>
                    ))}

                    <li className="page-item"><button className="page-link" onClick={()=>setPage(page+1)}
                        disabled={page === (totalPages-1)} >Next</button></li>

                </ul>
            <p className="text-center">{`Page ${page+1} of ${totalPages} total pages`}</p>
<p className="text-center">{`Showing ${currentList.length} records from total ${totalRecords} records`}</p>
</nav>
        </div >
    )
}

export default ObjectList
