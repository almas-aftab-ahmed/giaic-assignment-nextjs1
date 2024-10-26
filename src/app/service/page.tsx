import styles from'./sevice.module.css';

import React from "react";
import Link from "next/link";

const servicePage = ()=>{
    return(
        <div className={styles.service}>
            <h1 className={styles.footer}>servicepage</h1>
            <ul>
                <li><Link href='/service/web-devop'>we  develp websites for small buisness</Link></li>
                
            </ul>
        </div>
    )
}
export default servicePage;