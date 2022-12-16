import axios from 'axios';
import React ,{useState}  from 'react'




function Addiamge() {

    const [userInfo, setuserInfo] = useState({
      file:[],
      filepreview:null,
     });
  
    const handleInputChange = (event) => {
      setuserInfo({
        ...userInfo,
        file:event.target.files[0],
        filepreview:URL.createObjectURL(event.target.files[0]),
      });
  
    }
  
    const [isSucces, setSuccess] = useState(null);
  
    const submit = async () =>{
      const formdata = new FormData(); 
      formdata.append('avatar', userInfo.file);
      formdata.append("name" , "zakaria")
  
      axios.post("http://localhost:3001/uploadimage", formdata,{   
              headers: { "Content-Type": "multipart/form-data" } 
      })
      .then(res => { // then print response status
        console.warn(res);
        if(res.data.success === 1){
          setSuccess("Image upload successfully");
        }
  
      })
    }
  
    return (
      <div className="container mr-60">
        <h3 className="text-white">React Image Upload And Preview Using Node Js - <span> codeat21.com </span> </h3>
  
        <div className="formdesign">
        {isSucces !== null ? <h4> {isSucces} </h4> :null }
          <div className="form-row">
            <label className="text-white">Select Image :</label>
            <input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
          </div>
  
          <div className="form-row">
            <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Save </button>
            
          </div>
        </div>
        
        {userInfo.filepreview !== null ? 
          <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
        : null}


        <img src='http://localhost/store/public/uploads/1670882449882-profile-pic%20(2).png' />
  
      </div>

    );
  }

export default Addiamge
