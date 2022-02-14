import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import styles from "../../styles/audio.module.css"
import { SampleCollection1 } from "../../data/audio/sample"
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import AudioIcon from "./Icons/audioicon"
import Audioepisodes from "./audiocard"
import { AudioSeries } from "../../data/audio/types"

import PlayArrowIcon from "./Icons/pauseicon";
export interface rowData {
    id: string,
    name: string,
    description: string,
    image:
    string,
    audio: string,
    language: string,
    keywords: Array<string>,
    audioSeriesId: string,
    audioCollectionId: string,
}

export default function MediaControlCard() {
    const theme = useTheme();
    const [showseriesComponent, setshowSeriesComponent] = React.useState(true)
    const [currentSeriesData, setcurrentSeriesData] = React.useState<rowData[]>([])
    const [showepisodes, setshowEpisodes] = React.useState(false)
    function currentRowData(e: any): void {
        console.log(e)
    }

    return (
        <>
            <Box style={showseriesComponent ? { "display": "block" } : { "display": "none" }}>
                {
                    SampleCollection1.audioSeries.map((row
                    ) => (
                        <Card sx={{ display: 'flex' }} className={styles.audioCardMain} key={row.id}>

                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={row.image}
                                alt="Live from space album cover"
                                className={styles.imageSection}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        {row.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {row.description}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        This is the Sample data of the audio series imported from the data folder
                                    </Typography>
                                    <CardActions>
                                        <Button variant="contained" size="large" className={styles.listenBtn} onClick={(event) => {
                                            console.log(row.episodes)
                                            setshowEpisodes(true)
                                            setcurrentSeriesData(row.episodes)
                                            setshowSeriesComponent(false)
                                        }}>Listen<img className={styles.musicIcon} src="./images/music.svg"></img></Button>

                                    </CardActions>
                                </CardContent>

                            </Box>

                        </Card>
                    ))
                }
            </Box >

            <Box style={showepisodes ? { "display": "block" } : { "display": "none" }}>
                {currentSeriesData.map((row) => (< Audioepisodes rowData={row} key={row.id} />
                ))}
            </Box>
        </>
    );
}