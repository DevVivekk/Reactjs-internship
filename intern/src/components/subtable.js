import React from 'react'
import { useNavigate } from 'react-router-dom'

function Subtable() {
    const navigate = useNavigate();
    const callFunc = ()=>{
        navigate('/getapi')
    }
  return (
    <div className='subtable'>
    <div className='sub'>
    <h1 className='sub-hero' style={{"width":"30rem"}}>For Get Request of Json placeholder fake rest api, click here 👉</h1>
    <div style={{"position":"relative","right":"0rem"}}>
    <button style={{"marginTop":"3rem","width":"14rem","height":"4rem","color":"white","backgroundColor":"black","border":"1.7px solid white","fontWeight":"600","cursor":"pointer"}}>Submit</button><br />
    <button onClick={callFunc} style={{"position":"absolute","top":"4rem","left":"1.5rem","width":"14rem","height":"4rem","color":"white","backgroundColor":"chocolate","fontWeight":"600","cursor":"pointer","marginBottom":"3rem"}}>Get Data</button>
    </div>
    </div>
    </div>
  )
}

export default Subtable