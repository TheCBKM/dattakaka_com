import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slider from "./slider"
import styles from "../../styles/books.module.css"
import Button from '@mui/material/Button';
import Link from 'next/link'


import Icon from '@material-ui/core/Icon';
import { SampleCollection1 } from "../../data/audio/sample"


export default function MediaControlCard() {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }} className={styles.booksMainDiv}>
            <Slider />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5" className={styles.topTextBook}>
                        {SampleCollection1.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {SampleCollection1.description}
                    </Typography>
                    <Button className={styles.viewSeriesBtn} variant="contained"><Link href={"/audio/" + SampleCollection1.id}>View Series</Link></Button>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">

                    </IconButton>
                    <IconButton aria-label="play/pause">

                    </IconButton>
                    <IconButton aria-label="next">

                    </IconButton>
                </Box>
            </Box>

        </Card>
    );
}