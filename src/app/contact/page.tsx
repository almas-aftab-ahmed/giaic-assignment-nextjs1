import styles from './contact.module.css';
 import Link from 'next/link';
import React from "react";
const contactPage =()=>{
    return(
        <div className={styles.header}>
            <h1 className={styles.container}>contact us</h1>


            <ul>
                <li><Link href="/">go to homepage</Link></li>
                
                <li><Link href="/about" target="_blank"> go to Aboutpage</Link></li>
                <li><Link href="/service">go to servicepage</Link></li>
            </ul>



        </div>
    );
};
export default contactPage;