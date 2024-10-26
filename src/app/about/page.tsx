

import Link from "next/link";
import React from "react";
import styles from './about.module.css';

const AboutPage= ()=>{
    return(
        <div className={styles.title}>
            <h1 className={styles.green}>about our next.js website</h1>
            <p className={styles.about}>you can get any info about our website,so keep in touch!</p>
            <ul>
                <li><Link href="/">go to homepage</Link></li>
                
                <li><Link href="/contact" target="_blank"> go to contact page</Link></li>
                <li><Link href="/service">go to service page</Link></li>
            </ul>
    

        </div>
    );
};
export default AboutPage;