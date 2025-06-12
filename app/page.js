import Image from "next/image";
import { Poppins } from 'next/font/google';
import Link from 'next/link'

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins", 
  weight: ["400", "500", "600", "700"], 
});


export default function Home() {
  return (
    <main className="bg-blue-200 relative overflow-hidden">
  <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] items-center px-6 py-12 gap-8 relative">
    
    {/* 📱 Mobile-only Overlap Image */}
    <div className="absolute inset-0 md:hidden z-0 opacity-20">
      <Image
        src="/Vector.jpg"
        alt="Vector Background"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* 🖊️ Text Section */}
    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left relative z-10">
      <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${poppins.className}`}>
        One of the best URL Shortner for you
      </p>
      <p className="text-sm sm:text-base text-gray-800 max-w-md backdrop-blur-sm md:backdrop-blur-0">
        We are the straight forward URL shortner here. <strong>ZipyLinks</strong> is a fast, minimalist, and efficient URL shortener that turns your long and messy links into clean, shareable short links - in a zip! Whether you are a developer, marketer, or casual user.
      </p>
      <div className='flex flex-wrap justify-center md:justify-start gap-4 text-purple-800'>
        <Link href='/shorten'>
          <button className='bg-purple-300 rounded-lg shadow-lg px-6 py-2 font-bold hover:bg-purple-400 transition'>
            Try Now
          </button>
        </Link>
        <Link href='/github.com/Sumit09121'>
          <button className='bg-purple-300 rounded-lg shadow-lg px-6 py-2 font-bold hover:bg-purple-400 transition'>
            Github
          </button>
        </Link>
      </div>
    </div>

    {/* 💻 Desktop image on right side */}
    <div className="relative w-full h-64 sm:h-80 md:h-full hidden md:block">
      <Image
        className="mix-blend-darken object-contain"
        alt="An Image of a vector"
        src={"/Vector.jpg"}
        fill
        priority
      />
    </div>
  </section>
</main>

  );
}
