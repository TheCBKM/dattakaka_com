import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import styles from "../../styles/audio.module.css"
import { SampleCollection1 } from "../../data/audio/sample"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ReactAudioPlayer from 'react-audio-player';
import CardActions from '@mui/material/CardActions';
import { getSingleAudioSeries } from "../../services/getaudioseries"

interface Props {
    seriesId: any
}

export default function AudioCollectionIdSearch(props: Props) {
    const [checked, setChecked] = React.useState([1]);


    return (
        <>
            <Box className={styles.mainAudiPageBox} >


                {getSingleAudioSeries(props.seriesId).map((row) => {
                    return (<Card className={styles.audioSeriesCard} key={row.id} >
                        <CardMedia
                            component="img"
                            alt="Series Image"
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
                            {/* <List className={styles.audiPlayerMainBox} sx={{ width: '100%', bgcolor: 'background.paper' }} >
                                {row.episodes.length > 0 ? row.episodes.map((value) => {
                                    const labelId = `checkbox-list-secondary-label-${value}`;
                                    return (
                                        <ListItem
                                            className="audio-class"


                                            key={value.id}

                                            disablePadding
                                        >
                                            <ListItemButton className={styles.audioSeriesandaudioPlayer}>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        alt={`Avatar`}
                                                        src={value.image}
                                                    />
                                                </ListItemAvatar>
                                                <Typography>{value.name}<br></br><Box style={{ "fontSize": "11px" }}>{value.description}</Box></Typography >
                                                <ReactAudioPlayer
                                                    src={value.audio}

                                                    className={styles.audioPlayer}

                                                    controls
                                                />
                                            </ListItemButton>

                                        </ListItem>
                                    );
                                }) :
                                    <Typography variant="h5" className={styles.noAudioText}>No Audio Exist</Typography>

                                }
                            </List> */}

                        </CardActions>
                    </Card>)
                })}
            </Box >


        </>
    );
}