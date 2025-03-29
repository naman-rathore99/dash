import React, { useState } from 'react'

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);


    const showMenuItems = () => {
        setShowMenu(!showMenu);
      };
  return (
    <div className="pt-5 pl-8 pr-7 py-5 bg-white flex justify-between gap-2 ">
               <div className="hidden sm:flex max-w-2xl justify-between w-full">
                 <div className="flex flex-col">
                   <span className="text-base md:text-xl text-[#212B36] font-semibold">
                     Hello Dominik!
                   </span>
                   <span className="text-sm font-normal">
                     Welcome back to dashboard.
                   </span>
                 </div>
                 <div className="lg:max-w-sm w-2/5 lg:w-full border focus-within:border-blue-600 rounded-lg border-[#E7E7E7] py-3 px-4 justify-between items-center max-h-12 hidden md:flex">
                   <input
                     type="text"
                     className="outline-none w-9/12"
                     placeholder="Search..."
                   />
                   <svg
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <path
                       fillRule="evenodd"
                       clipRule="evenodd"
                       d="M9.16667 3.33335C5.94501 3.33335 3.33334 5.94503 3.33334 9.16669C3.33334 12.3883 5.94501 15 9.16667 15C12.3883 15 15 12.3883 15 9.16669C15 5.94503 12.3883 3.33335 9.16667 3.33335ZM1.66667 9.16669C1.66667 5.02455 5.02454 1.66669 9.16667 1.66669C13.3088 1.66669 16.6667 5.02455 16.6667 9.16669C16.6667 13.3088 13.3088 16.6667 9.16667 16.6667C5.02454 16.6667 1.66667 13.3088 1.66667 9.16669Z"
                       fill="#637381"
                     />
                     <path
                       fillRule="evenodd"
                       clipRule="evenodd"
                       d="M13.2857 13.2858C13.6112 12.9603 14.1388 12.9603 14.4643 13.2858L18.0893 16.9108C18.4147 17.2362 18.4147 17.7638 18.0893 18.0893C17.7638 18.4147 17.2362 18.4147 16.9108 18.0893L13.2857 14.4643C12.9603 14.1388 12.9603 13.6112 13.2857 13.2858Z"
                       fill="#637381"
                     />
                   </svg>
                 </div>
               </div>
               <div className="flex gap-2 items-center sm:hidden">
                 <img src="/logo.svg" alt="logo" />
                 <span className="text-xl font-semibold ">Infysales</span>
               </div>
               <div
                 className="cursor-pointer sm:hidden border border-[#E7E7E7] hover:border-blue-600 group rounded-md flex justify-center items-center"
                 onClick={showMenuItems}
               >
                 <svg
                   className="group-hover:text-blue-600 text-[#637381] w-10 h-10"
                   xmlns="http://www.w3.org/2000/svg"
                   width="24"
                   height="24"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h16M4 18h16"
                   />
                 </svg>
               </div>
               <div className="hidden sm:flex gap-4">
                 <div className="w-12 h-12 bg-[#F6F8FA] rounded-lg flex items-center justify-center border border-[#E7E7E7] cursor-pointer group">
                   <svg
                     width="24"
                     height="26"
                     viewBox="0 0 24 26"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="group-hover:fill-blue-600 fill-[#637381]"
                   >
                     <path
                       fillRule="evenodd"
                       clipRule="evenodd"
                       d="M7.05033 5.05025C8.36309 3.7375 10.1436 3 12.0001 3C13.8566 3 15.6371 3.7375 16.9498 5.05025C18.2626 6.36301 19.0001 8.14349 19.0001 10C19.0001 13.3527 19.7171 15.4346 20.378 16.6461C20.7098 17.2544 21.0329 17.6535 21.2573 17.8904C21.3698 18.0091 21.4581 18.0878 21.5114 18.1322C21.538 18.1544 21.5558 18.168 21.5635 18.1737C21.5647 18.1746 21.5657 18.1753 21.5664 18.1758C21.9249 18.4221 22.0835 18.8725 21.9572 19.2898C21.8295 19.7115 21.4407 20 21.0001 20H3.00008C2.55941 20 2.17068 19.7115 2.04299 19.2898C1.91664 18.8725 2.07528 18.4221 2.43377 18.1758C2.43447 18.1753 2.43542 18.1746 2.43663 18.1737C2.44432 18.168 2.46218 18.1544 2.4888 18.1322C2.54202 18.0878 2.6304 18.0091 2.74288 17.8904C2.9673 17.6535 3.29039 17.2544 3.62218 16.6461C4.28301 15.4346 5.00008 13.3527 5.00008 10C5.00008 8.14348 5.73758 6.36301 7.05033 5.05025ZM2.44388 18.169C2.44395 18.1689 2.44403 18.1688 2.44411 18.1688C2.44411 18.1688 2.4441 18.1688 2.4441 18.1688L2.44388 18.169ZM5.1494 18H18.8508C18.7747 17.8753 18.6983 17.7434 18.6222 17.6039C17.783 16.0654 17.0001 13.6473 17.0001 10C17.0001 8.67392 16.4733 7.40215 15.5356 6.46447C14.5979 5.52678 13.3262 5 12.0001 5C10.674 5 9.40223 5.52678 8.46454 6.46447C7.52686 7.40215 7.00008 8.67392 7.00008 10C7.00008 13.6473 6.21715 16.0654 5.37797 17.6039C5.30188 17.7434 5.22549 17.8753 5.1494 18Z"
                     />
                     <path
                       fillRule="evenodd"
                       clipRule="evenodd"
                       d="M9.76817 22.135C10.2459 21.8579 10.8578 22.0205 11.1349 22.4982C11.2228 22.6497 11.349 22.7755 11.5008 22.863C11.6526 22.9504 11.8247 22.9964 11.9999 22.9964C12.1751 22.9964 12.3472 22.9504 12.4991 22.863C12.6509 22.7755 12.777 22.6497 12.8649 22.4982C13.1421 22.0205 13.754 21.8579 14.2317 22.135C14.7094 22.4121 14.8721 23.024 14.5949 23.5018C14.3312 23.9564 13.9527 24.3337 13.4973 24.596C13.0419 24.8584 12.5255 24.9964 11.9999 24.9964C11.4744 24.9964 10.958 24.8584 10.5026 24.596C10.0472 24.3337 9.66866 23.9564 9.40494 23.5018C9.12782 23.024 9.29044 22.4121 9.76817 22.135Z"
                     />
                     <circle
                       cx="16"
                       cy="4"
                       r="3.5"
                       stroke="white"
                       className="group-hover:fill-blue-600 fill-[#DC3545]"
                     />
                   </svg>
                 </div>
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-[#E7E7E7] relative cursor-pointer group">
                   <svg
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="group-hover:fill-blue-600 fill-[#637381]"
                   >
                     <path
                       fillRule="evenodd"
                       clipRule="evenodd"
                       d="M4 5C3.45228 5 3 5.45228 3 6V18C3 18.5477 3.45228 19 4 19H20C20.5477 19 21 18.5477 21 18V6C21 5.45228 20.5477 5 20 5H4ZM1 6C1 4.34772 2.34772 3 4 3H20C21.6523 3 23 4.34772 23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6Z"
                     />
                     <path
                       fillRule="evenodd"
                       clipRule="evenodd"
                       d="M1.18085 5.42656C1.49757 4.97411 2.1211 4.86408 2.57355 5.18079L12.0001 11.7794L21.4266 5.18079C21.8791 4.86408 22.5026 4.97411 22.8193 5.42656C23.136 5.87901 23.026 6.50254 22.5735 6.81926L12.5735 13.8193C12.2292 14.0603 11.7709 14.0603 11.4266 13.8193L1.42662 6.81926C0.974174 6.50254 0.864139 5.87901 1.18085 5.42656Z"
                     />
                   </svg>
                   <div className="w-5 h-5 rounded-full bg-[#4F80E1] absolute -top-2.5 -right-1.5 text-white text-center text-xs font-medium flex justify-center items-center">
                     4
                   </div>
                 </div>
               </div>
             </div>
  )
}

export default Navbar