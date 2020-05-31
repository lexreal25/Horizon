// JavaScript source code
import React from 'react'
import logo from './image/logo.png'



 function Layout() {

     return (
         <div className='layoutFlex'>

             <div className="header">

                 <image className="img-logo" src={logo} alt="logo" />

                 <nav>
                     <ul className="list-items">
                         <li><a href="aboutus.html">About_Us</a></li>
                         <li><a href="services.html">Services</a></li>
                         <li><a href="location.html">Location</a></li>
                         <li><a href="gallery.html">Gallery</a></li>
                         <li><a href="blog.html">Blog</a></li>
                        
                     </ul>
                 </nav>
             </div>
           
         </div>
        )
   
}
export default Layout