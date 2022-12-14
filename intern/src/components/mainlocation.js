import React, { useCallback } from 'react'

function MainLocation({fetchh,getlocation}) {
useCallback(()=>{
getlocation();
console.log('im mainlocation')
},[getlocation])
  return (
    <div className='MainLocation'>
    <h1 className='hero-data' style={{fontFamily:"monospace",width:"50rem"}}>Your Complete Location Details!!</h1>
    <div className='main-hero'>
    <label>Ip</label><br />
    <input type="text" value={fetchh.ip} name="ip" /><br /> <br />
    <label>City</label>
    <input type="text" value={fetchh.city} name="city" /><br /> <br />
    <label>Latitude</label>
    <input type='text' value={fetchh.latitude} name='latitude' /> <br /> <br />
    <label>Longitude</label>
    <input type='text' value={fetchh.longitude} name='longitude' /> <br /> <br />
    <label>Network</label>
    <input type='text' value={fetchh.network} name='network' /> <br /> <br />
    </div>
    <div  className='main-hero'>
    <label>Org</label>
    <input type='text' value={fetchh.org} name='org' /> <br /> <br />
    <label>Asn</label>
    <input type='text' value={fetchh.asn} name='asn' /> <br /> <br />
    <label>Country_area</label>
    <input type='text' value={fetchh.country_area} name='country_area' /> <br /> <br />
    <label>Postal</label>
    <input type='text' value={fetchh.postal} name='postal' /> <br /> <br />
    <label>Region</label>
    <input type='text' value={fetchh.region} name='region' /> <br /> <br />
    <label>Region_code</label>
    <input type='text' value={fetchh.region_code} name='region_code' /> <br /> <br />
    </div>
    </div>
  )
}

export default MainLocation