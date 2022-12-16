import React , { useState} from 'react'
import axios from 'axios'
import { baseurl } from '../helper/Baseurl'
function AddBlog() {


    const [blogbody, setBlog] = useState("")
    const [blogtitle, setBlogTitle] = useState("")
    
    const addblog =  async (e) => {

        e.preventDefault();

        await axios.post(baseurl + 'addnewblog' , {
            blogbody : blogbody,
            blogtitle : blogtitle,
            userid : window.localStorage.getItem('userid')
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

  return (
    
    <div className='container'>
            <br/>
            <br/>  
            <div className="mb-3">
            <input onChange={ e => setBlogTitle(e.target.value)}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="blogTitle" />
            </div>
      
            <div className="mb-3">
            <textarea onChange={ e => setBlog(e.target.value)}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="blogbody" />
            </div>

            <div className="mb-3">
            <button  onClick={e => addblog(e)} className='btn btn-primary'> Add New Blog </button>
            </div>
    </div>
  )
}

export default AddBlog
