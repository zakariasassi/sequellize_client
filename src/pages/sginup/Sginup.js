import React , { useState } from 'react'
import axios from 'axios'
import { baseurl } from '../../helper/Baseurl'
import { useNavigate } from 'react-router-dom'

function Sginup() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username  , setUsername ] = useState("") 


    async function Sginup (e) {
        e.preventDefault()

        await axios.post(baseurl + 'addnewuser' , {
            name : username,
            email: email,
            password: password
        }).then( res => {
            if(res){
                console.log(res.data.username)

                window.localStorage.setItem('isLogedin' , true)
                window.localStorage.setItem('userid' , res.data.userid)
                window.localStorage.setItem('username' , res.data.username)

                navigate('/blogs')



            }
        }).catch( err => {
            console.log(err)
        })

    }

  return (
    <>
        <div className='container' style={{ marginTop:200 , width:'40%'}}>
            <h2 style={{ textAlign:'center' }}>فتح حساب جديد </h2>
        <div className="mb-3">
        <input onChange={ e => setUsername(e.target.value)  }  type="text" className="form-control"  placeholder="Enter Your Username" />
      </div>
      <div className="mb-3">
        <input  onChange={ e => setEmail(e.target.value) } type="email" className="form-control"  placeholder="Enter your E-mail" />
      </div>
      <div className="mb-3">
        <input onChange={ e => setPassword(e.target.value) } type="password" className="form-control"  placeholder=" type password" />
      </div>
      <button onClick={ e => Sginup(e) } className='btn btn-danger' > Create New Account  </button>
        </div>
    </>
  )
}

export default Sginup
