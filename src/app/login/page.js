'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function page (){

      const navigation = useRouter()

    return (
        <div>
           <h1> This is login page </h1>
           <Link href="/" ><h2>Go back to the Home page</h2></Link>
           <button onClick={()=>{navigation.push('/')}}>Go to Home page</button>
        </div>
    )
}