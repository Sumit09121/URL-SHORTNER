import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from 'next/link'

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", 
  weight: ["400", "500", "600", "700"], 
});


export default function Home() {
  return (
    <main className="bg-blue-200">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            One of the best URL Shortner for you
          </p>
          <p className="px-34 text-center">
<<<<<<< HEAD
            We are the straight forward URL shortner here .ZipyLinks is a fast, minimalist, and efficient URL shortener that turns your long and messy links into clean, shareable short links - in a zip! Whether you are a developer, marketer, or casual user.
=======
           " We are the straight forward URL shortner here .ZipyLinks is a fast, minimalist, and efficient URL shortener that turns your long and messy links into clean, shareable short links - in a zip! Whether you're a developer, marketer, or casual user."
>>>>>>> 9fc512a (Updated Shorten page and fixed redirect issue)
          </p>
          <div className=' flex gap-3 text-purple-800'>
          <Link href='/shorten'><button className=' bg-purple-300 rounded-lg shadow-lg p-3 py-2 font-bold'>Try Now</button></Link>
          <Link href='/github'><button className=' bg-purple-300 rounded-lg shadow-lg p-3 py-2 font-bold'>Github</button></Link>
        </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="An Image of a vector" src={"/Vector.jpg"} fill={true } />
        </div>
      </section>
    </main>
  );
}
