import React from 'react';
import styles from '../../../styles/Home.module.css'
import Typography from '@mui/material/Typography';
import Image from 'next/image'

const footer = () => {
    return <div>

        <footer className={styles.footer}>
            <a

                target="_blank"
                rel="noopener noreferrer"
                style={{ "fontSize": "2rem", "fontWeight": "300px" }}
            >
                DattaKaka.com
                {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>  */}

            </a>
            <br></br>
            <center> <Typography
                variant="p"



            >

                response@dattakaka.com
                <br></br><br></br>
                © Copyright dattakaka.com. All right reserved.
                <br></br>
                This is just an informative website regarding the teachings of Datta Kaka.
            </Typography>
            </center>
        </footer>

    </div>;
};

export default footer;
