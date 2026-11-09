import { useState } from "react"
import { addObject } from "../store/actions/ObjectAction"
import { useDispatch } from "react-redux"

function ObjectAdd() {
const [name, setName] = useState("")
const [year, setYear] = useState("")
const [price, setPrice] = useState("")
const [cpu, setCpu] = useState("")
const [msg, setMsg] = useState("")
const [showForm, setShowForm] = useState(false)

const dispatch = useDispatch()

const openForm = ()=>{
        setName("")
        setYear("")
        setPrice("")
        setCpu("")
        setMsg("")
        setShowForm(true)
}

const add = async (e)=>{
        e.preventDefault()

        let obj = {
            'name': name ,
            'data': {
                'Year': year === "" ? null : Number(year),
                'Price': price === "" ? null : Number(price),
                'CPU': cpu === "" ? null : cpu
            }
        }
        try {
            await dispatch(addObject(obj))
            setMsg("Object added successfully")
            setShowForm(false)
        }
        catch (err) {
            setMsg(err.response?.data?.error || "Operation failed")
        }
}
    return (
        <div className="container">
            {
            showForm === false ?
            <div>
                <button className="btn btn-primary" onClick={()=> openForm()}>
                +Add Object
                </button>
                <span className="ms-3">{msg}</span>
            </div>
            :
            <div>
            <h3>Add new Object</h3>
            <form onSubmit={(e)=> add(e)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mt-4">
                            <label>Name</label>
                            <input type="text" className="form-control" required
                            onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label>Year</label>
                            <input type="number" className="form-control"
                            onChange={(e)=> setYear(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label>Price</label>
                            <input type="number" step="0.01" className="form-control"
                            onChange={(e)=> setPrice(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label>CPU</label>
                            <input type="text" className="form-control"
                            onChange={(e)=> setCpu(e.target.value)}/>
                        </div>
                        <div className="mt-4">

                            <button type="submit" className="btn btn-primary" >
                            Save
                            </button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={()=> setShowForm(false)}>
                            Cancel
                            </button>
                            <span className="ms-3">{msg}</span>
                        </div>
                    </div>

                </div>
            </form>
            </div>
            }
        </div>
    )
}

export default ObjectAdd