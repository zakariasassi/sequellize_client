import React , {useState} from 'react'
import './style.css'
import axios from 'axios'


function Addprodact() {

    const [pname, setPname] = useState('')
    const [pdesc, setPdesc] = useState('')
    const [pprice, setPrice] = useState(0.0)
    const [message ,setMessage] = useState("")
    const [statue , setStatue] = useState(false)
   async function saveProdact (e) {
        e.preventDefault()

        await axios.post('http://localhost:3001/addprodact' , 
        {
            prodactname : pname,
            prodactdescription : pdesc,
            prodactprice : pprice
        }).then( res => {
            if(res.data.statue ){
                setStatue(true)
                setMessage(res.data.msg)
            }
        })
        .catch( err => console.log(err))


    }




  return (
    <>
    <div className='add-bg'>
        <div className='container' style={{ marginTop:150  , width:'50%'}}>
        <h1 style={{ color:'#e74c3c' , fontFamily:'tajawal' }} >Wellcome to student Dashboard</h1>

        <div className="mb-3">
        <label for="prodactname" className="form-label">Prodact name</label>
        <input onChange={ e => setPname(e.target.value)   } type="text" className="form-control" id="prodactname" placeholder="prodactname" />
    </div>

    <div className="mb-3">
        <label for="prodactdes" className="form-label">Prodact description</label>
        <input onChange={ e => setPdesc(e.target.value)} type="text" className="form-control" id="prodactname" placeholder="description" />
    </div>


    <div className="mb-3">
        <label for="prodactprice" className="form-label">Prodact price</label>
        <input  onChange={ e => setPrice(e.target.value)} type="number" maxLength={20} className="form-control" id="prodactprice" placeholder="price" />
    </div>

    {
    statue &&
     <div class="alert alert-danger" role="alert">
    {message}
    </div>
    }
   
    <button onClick={ e => saveProdact(e) } type="button" class="btn btn-danger">Add New</button>   
         </div>

    </div>

    </>
  )
}

export default Addprodact
