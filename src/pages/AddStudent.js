import React , {useState  } from 'react'
import axios from 'axios'


function AddStudent() {

   const [ pname , setPname ] = useState("")
   const [ pdes , setPdes ] = useState("")
   const [pprice , setPrice] = useState(0)


    async function sendata(e){
      e.preventDefault()
     await  axios.post('http://localhost:3001/addprodact' , {
        pname : pname,
        pdes : pdes,
        pprice : pprice
      }).then( res => console.log(res.data.message)).catch( err => console.log(err))

   }

  return (
    <>
      <div className="container-sm" style={{ width:'60%'  , marginTop:200 , textAlign:'right'}  }>
        <div class="mb-3">
          <label for="prodactname" class="form-label"> prodact name</label>
          <input
            onChange={ e => setPname(e.target.value) }
            type="text"
            class="form-control"
            id="prodactname"
            placeholder="ادخل اسم المنتج"
          />
        </div>


        <div class="mb-3">
          <label for="prodactname" class="form-label"> prodact description</label>
          <input
                      onChange={ e => setPdes(e.target.value) }

            type="text"
            class="form-control"
            id="prodactname"
            placeholder="ادخل وصف المنتج المنتج"
          />
        </div>




        <div class="mb-3">
          <label for="prodactname" class="form-label"> prodact price</label>
          <input
                                onChange={ e => setPrice(e.target.value) }

            type="text"
            class="form-control"
            id="prodactname"
            placeholder="ادخل سعر  المنتج"
          />
        </div>

        <button onClick={ e => sendata(e) }  > add new prodact</button>
      </div>
    </>
  );
}

export default AddStudent
