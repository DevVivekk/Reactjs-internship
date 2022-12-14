import React, { useState } from 'react'

function Input() {
    const [user,setUser] = useState({id:"",title:"",body:""})

    const sendPost = async(e)=>{
      e.preventDefault();
      const {id,title,body} = user;
      const res = fetch('https://jsonplaceholder.typicode.com/posts',{
        method:"POST",
        headers:{
          "Accept":"appilcation/json",
          "ContentType":"application/json"
        },
        body:JSON.stringify({id,title,body})
      });
      if(!res.status===201 || !res.status===204){
        window.alert("Data not added!!")
      } else if(title==="" || body==="" || id===""){
        window.alert('Please select a user!')
      }else{
        window.alert("Data added successfully!!")
        console.log(user);
        setUser({...user,id:"",title:"",body:""})
      }
  
}


   const handleChange = (e)=>{
        const name= e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
      }
  return (
    <div className='input'>
        <div className='form-control'>
         <form onSubmit={sendPost} method="POST">
         <label>Id</label><br/>
         <input type='number' placeholder="Enter id" name="id" value={user.id} onChange={handleChange}></input><br/><br/><br/>
            <label>Title</label><br/>
            <input name='title' value={user.title} onChange={handleChange} type='text' placeholder="This is a title."></input><br/><br/><br/>
            <label>Body</label><br/>
            <input name='body' value={user.body} type='text' onChange={handleChange} placeholder="This is a body."></input><br/><br/><br/>
            <button type='submit'>Submit</button>
            </form>
        </div>

        <div className='input-1'>
          <h1>Here you can, send post request to "Json placeholder Fake Api"</h1>
        </div>
    </div>
  )
}

export default Input