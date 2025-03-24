import Link from "next/link";



export default function studentList () {
    return(
        <div>
            <h1> student list </h1>
             <ul>
                <li>
                    <Link href='/studentList/anil'> Anil </Link>
                </li>
                <li>
                    <Link href='/studentList/dipti'> Dipti </Link>
                </li>
                <li>
                    <Link href='/studentList/sam'> sam </Link>
                </li>
                <li>
                   <Link href='/studentList/vasker'> vasker </Link>
                </li> 
                <li>
                   <Link href='/studentList/shuvo'> shuvo </Link>
                </li>
                <li>
                   <Link href='/studentList/ratul'> ratul </Link>
                </li>
             </ul>
        </div>
    )
}