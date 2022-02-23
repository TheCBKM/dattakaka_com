import React from 'react';
import styles from '../../styles/Home.module.css'
import Typography from '@mui/material/Typography';
import Image from 'next/image'

const footer = () => {
    return <div>

        <footer className={styles.footer}>
            <a

                target="_blank"
                rel="noopener noreferrer"
                className="brand-name"
            >
                DattaKaka.com
                {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>  */}

            </a>
            <br></br>
            <Typography


                className="footer-content"



            >

                response@dattakaka.com
            </Typography><br></br><br></br>
            <Typography

                className="footer-content"



            >

                © Copyright dattakaka.com. All right reserved.
            </Typography><br></br>
            <Typography
                className="footer-content"



            >
                This is just an informative website regarding the teachings of Datta Kaka.
            </Typography>

        </footer>

    </div>;
};

export default footer;
