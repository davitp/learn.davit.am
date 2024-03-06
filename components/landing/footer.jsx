import Link from "next/link"
import siteConfig from "site.config"

export default function Footer(){
   
   return  <footer className="bg-gray-50 rounded-lg shadow dark:bg-gray-900">
       <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
           <div className="sm:flex sm:items-center sm:justify-between">
               <a href={`https://${siteConfig.domain}/`} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                   <img src="/logo/logo.svg" className="h-8" alt="Logo" />
                   <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Learning Portal</span>
               </a>
               <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                   <li>
                       <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
                   </li>
                   <li>
                       <Link href="/linux-programming" className="hover:underline me-4 md:me-6">Linux Programming</Link>
                   </li>
                   <li>
                       <a href={siteConfig.github} className="hover:underline me-4 md:me-6">GitHub</a>
                   </li>
               </ul>
           </div>
           <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
           <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://davit.am" className="hover:underline">Davit Petrosyan</a>. All Rights Reserved.</span>
       </div>
   </footer>
   
   
}