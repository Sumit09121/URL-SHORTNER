"use client"
import AppRouteRouteModule from 'next/dist/server/route-modules/app-route/module'
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const[url,seturl] = useState("")
    const[shorturl,setshorturl] = useState("")
    const[generated,setGenerated] = useState("")

  const generate = () => { 
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ 
    "url": url,
    "shorturl": shorturl
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    console.log(result)
    alert(result.message)
})
  .catch((error) => console.error(error));
    }
    
  return (
    <div className='mx-auto max-w-lg bg-blue-200 my-16 p-8 rounded-lg flex flex-col gap-6'>
<<<<<<< HEAD
      <h1 className='font-bold text-2xl'>Generate Your Short URLs</h1>
=======
      <h1 className='font-bold text-2xl'>"Generate Your Short URL's"</h1>
>>>>>>> 9fc512a (Updated Shorten page and fixed redirect issue)
      <div className='flex flex-col gap-4'>
        <input type='text'
        value={url} 
        className='px-4 py-2 focus:outline-blue-600 rounded-md'
        placeholder='Enter your URL' 
        onChange={e=>{seturl(e.target.value)}}/>
        <input type='text'
        value={shorturl}
        className='px-4 py-2 focus:outline-blue-600 rounded-md' 
        placeholder='Enter your preffered short URL text'
        onChange={e=>{setshorturl(e.target.value)}}/>
        <button  onClick={generate}
        className=' bg-purple-300 rounded-lg shadow-lg p-3 py-2 my-3 font-bold text-purple-900'>
        Generate
        </button>
      </div>
      {
        generate && <> <span className='font-bold text-lg'>
        Your Link
        </span>
        <code><Link target="_blank" href={generated} >
          {generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
