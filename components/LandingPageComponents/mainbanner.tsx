import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "../../styles/MainBanner.module.css"
import Box from '@mui/material/Box';
import { fontSize } from '@mui/system';


export default function MediaCard() {
	return (
		<Card
			className={styles.mainBannerStyles}
		>
			<CardMedia

				className={styles.cardMedia}
				component="img"
				height="140"
				image="./images/Dattakakamainbanner.webp"
				alt="Main image"

			/>
			<Box


				className={styles.siteDetails}
			>
				<Typography style={{ "fontSize": "4vw" }} variant="h2">DATTAKAKA.COM</Typography><br></br>
				<Button style={{ "background": "black", "padding": "10px", "fontSize": "1rem" }} variant="contained" size="small">Learn More</Button>


			</Box>


		</Card>
	);
}