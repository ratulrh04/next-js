'use client'

import { useRouter } from "next/navigation"


export default function page() {

     const navigation = useRouter()

    return(
        <div>
            <h1>This page about collage information</h1>
            <button onClick={()=>{navigation.push('/')}}>Go to Home Page</button>
        </div>
    )
}