import Link from "next/link";
import React  from "react";
const HomePage=()=>{
    return(
        <div>
            <h1>wellcome to my next.js website</h1>
            <ul>
                <li><Link href="/">homepage</Link></li>
                <li><Link href="/about" target="_blank">about us</Link></li>
                <li><Link href="/contact" target="_blank">contact us</Link></li>
                <li><Link href="/service">our services</Link></li>
            </ul>
        </div>
    );
};
export default HomePage;