'use client'


export default function student({params}){
    return(
        <div>
            <span> Student id details</span>
            <h2>Name : {params.student}</h2>
        </div>
    )
}