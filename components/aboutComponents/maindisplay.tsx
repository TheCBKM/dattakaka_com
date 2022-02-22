import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import styles from "../../styles/about.module.css"


export default function MediaControlCard() {
    const theme = useTheme();
    container: void {
        marginTop: theme.spacing(10),
    }

    return (
        <>
            <Card className={styles.mainDisplayCard} >
                <CardMedia
                    component="img"
                    sx={{ width: "25%" }}
                    image="./images/AboutUsPage/displayimage.webp"
                    alt="Dattataka Image"
                    className={styles.image}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.textBox}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h4" className={styles.aboutHeading}>
                            Happiness through Ram-Nam
                        </Typography>
                        <Typography color="text.secondary" component="div" className={styles.fontFamilyAbout}>
                            Being happy is the ultimate value of a living human. A human being’s every action is meant towards making oneself happy. There are people who not only achieve ultimate happiness in their lives but they help others live a happy, frictionless, smooth life. These human beings are called ‘Saints’. Since they know the path to reach the peak of happiness; they have a right and authority to help others come to that peak.


                        </Typography>



                    </CardContent>

                </Box>

            </Card>







        </>
    );
}