'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"


export default function page (){

      const navigation = useRouter()

    return (
        <div>
             <h1> This is Student About page </h1>
             <br/>
             <br/>
             <Link href="/"><h2>Go back to the Home page</h2></Link>
             {/* page Navigation style */}
             <button onClick={()=>{navigation.push('/')}}>Back to home page</button>
             
        </div>
    )
}  