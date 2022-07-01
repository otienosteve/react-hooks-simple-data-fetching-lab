import React,{useState,useEffect} from 'react'

function App() {
    const [image,setImage]=useState('')
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random').then(resp=>resp.json())
        .then(data=>setImage(data.message)).catch(err=>console.log(err))

    },[])
  return (
    <div>
        {image?<img src={image} alt="A Random Dog"  />:"Loading..."}
    </div>
  )
}

export default App
