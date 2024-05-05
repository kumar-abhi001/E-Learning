 function Footer() {
     return (
       <footer className=" bg-blue-50 text-black rounded-t-2xl text-center p-3 mr-10">
         <div className="flex flex-row justify-between p-10">
           <div className="border-2 w-24 h-24 mb-3 rounded-full shadow-lg">
             Logo
           </div>
           <div className="flex flex-col text-left text-blue-600">
             <p className="font-semibold text-black">Quick Links</p>
             <a href="" className="underline">
               Terms & Conditions
             </a>
             <a href="" className="underline">
               Privacy Policy
             </a>
             <a href="" className="underline">
               Refund & Cancellation Policy
             </a>
           </div>
           <div className="">
             <p className="font-semibold text-black">Follow us</p>
             <a href="">X</a>
             <a href="">Y</a>
             <a href="">I</a>
           </div>
         </div>
         <p className="">
           &copy; {new Date().getFullYear()} All rights reserved
         </p>
       </footer>
     );
}

export default Footer;