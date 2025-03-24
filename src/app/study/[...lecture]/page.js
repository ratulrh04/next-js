'use client'


export default function lecture({params}){

       console.log(params)

    return(
        <div>
            <h1> welcome to the page</h1>
              <h2> Day of the collage is {params.lecture[0]} </h2>
              <h2> lecture no is {params.lecture[1]} </h2>
              <h2> book no is {params.lecture[2]} </h2>
        </div>
    )
} 