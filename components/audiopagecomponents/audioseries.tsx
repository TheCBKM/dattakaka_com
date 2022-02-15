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
import AudioList from "./audiolist"
import { AudioEpisode } from "../../data/audio/types"


export default function MediaControlCard() {

    return (
        <>
            <Box className={styles.mainAudiPageBox} >
                <Box className={styles.mainCollectionBox}>
                    <Card >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="500"

                            image={SampleCollection1.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {SampleCollection1.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {SampleCollection1.description}
                            </Typography>
                        </CardContent>
                        <CardActions>

                        </CardActions>
                    </Card>
                </Box>

                {SampleCollection1.audioSeries.map((row) => {
                    return (<Card className={styles.audioSeriesCard} key={row.id} >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image={row.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {row.name}

                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {row.description}
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.playList} >
                            <AudioList audioList={row.episodes} />
                        </CardActions>
                    </Card>)
                })}
            </Box >


        </>
    );
}