import React , {useEffect , useState} from 'react'
import axios from 'axios'
function Showprodacts() {
    const [prodactsdata, setProdactsdata] = useState([])


    async function getProdactsFromRouter () {
        await axios.get( 'http://localhost:3001/getallprodacts')
        .then( (res => {
            console.log(res.data)
            setProdactsdata(res.data.prodacts)
        })).catch( err => {
            console.log(err)
        } )
    }

    useEffect(() => {
        getProdactsFromRouter()
    }, [])

  return (
    <>

    {

        prodactsdata.map( (item, index) => {
                    return (
                    <> 
                    <div key={index}>
                            <h1 className="card">{item.prodactname}</h1>
                        </div>
                    </>
                    )

    })
      
      }
  
  

  </>
  )

    }
export default Showprodacts
