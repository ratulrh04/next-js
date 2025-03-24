'use client'
import Link from "next/link"
import "./style.css"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function page(){
// Navigation Running
const router = useRouter()
// A function running for a navigation page's running
let pageNavigation = (name) =>{
  router.push(name)
}
// hooks running 
const [name, setName] = useState('Megla')
const func =()=>{
   setName('Megla Shrivastava')
}
  return(
    <div>
      <h1 className="Megla">Hello {name} !</h1>
       <button onClick={()=>{func()}}>Click to Name change</button>
         <br/>
         <br/>
         <Link href="/login"><h2>Go to the login page</h2></Link>
         <Link href="/about"><h2>Go to the about page</h2></Link>
         <Link href="/studentList"><h2>Go to the studentList page</h2></Link>
         <Link href="/study"><h2>Go to the study page</h2></Link>
         <br/>
         <br/>
         {/* navigation style using to one page to another page */}
          <button onClick={()=>{pageNavigation("/about")}}>Go to the About page using a Navigation system</button>
          <br/>
          <br/>
          <button onClick={()=>{pageNavigation('/login')}}>Go to the Login page using a Navigation system</button>
          <br/>
          <br/>
          <Link href="/about/aboutStudent"><h2>About Student Page</h2></Link>
          <Link href="/about/aboutCollage"><h2>About Collage Page</h2></Link>
          <br/>
          <br/>
          <Link href="/login/loginStudent"><h2>Login Student Page</h2></Link>
          <Link href="/login/loginTeacher"><h2>Login Teacher Page</h2></Link>
    </div>
  )
}


