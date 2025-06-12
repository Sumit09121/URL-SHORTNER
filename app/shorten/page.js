"use client"
import AppRouteRouteModule from 'next/dist/server/route-modules/app-route/module'
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setGenerated] = useState("")

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
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="mx-auto w-full max-w-md bg-blue-200 my-10 p-6 sm:px-6 py-6 rounded-lg flex flex-col gap-6 shadow-md">
      <h1 className="font-bold text-xl sm:text-2xl text-center text-purple-900">
        Generate Your Short URLs
      </h1>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          placeholder="Enter your URL"
          className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          value={shorturl}
          onChange={(e) => setshorturl(e.target.value)}
          placeholder="Enter your preferred short URL text"
          className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={generate}
          className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 rounded-md transition"
        >
          Generate
        </button>
      </div>

      {generate && (
        <div className="flex flex-col gap-2 mt-4">
          <span className="font-bold text-lg text-purple-800">Your Link</span>
          <code className="text-sm break-words text-blue-800">
            <Link href={generated} target="_blank" className="hover:underline">
              {generated}
            </Link>
          </code>
        </div>

      )
      } </div>
  )
}

export default Shorten
