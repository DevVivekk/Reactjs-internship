import Table from "./table";
import Input from './input'
import { useEffect, useState } from "react";
import Location from "./location";
import Subtable from "./subtable";
import Navbar from "./navbar";
import MainLocation from './mainlocation'
import { BrowserRouter,Routes,Route } from "react-router-dom";
function Center() {
  const [value, setValue] = useState([]);
  const callApi = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setValue(data);
      });
  };
  useEffect(()=>{
    callApi();
    console.log('im call api')
  },[])

  const [fetchh, setFetchh] = useState([
    {
      ip: "",
      city: "",
      latitude: "",
      longitude: "",
      postal: "",
      org: "",
      region: "",
      region_code: "",
      asn: "",
      country_area: "",
      network: "",
    },
  ]);

  const getlocation = () => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((resultt) => {
        setFetchh(resultt);
      });
  };

  useEffect(()=>{
    getlocation();
    console.log('im center')
    },[])

    
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={[<Location getlocation={getlocation} fetchh={fetchh} />,<Input />,<Subtable />]} />
      <Route path='/getapi' element={<Table value={value} callApi={callApi}/>} />
      <Route path="/mylocation" element={<MainLocation getlocation={getlocation} fetchh={fetchh}   /> } />
    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default Center;