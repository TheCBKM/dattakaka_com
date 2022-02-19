import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import styles from "../../styles/audio.module.css"
import { SampleCollection1 } from "../../data/audio/sample"
import MusicPlayer from "./musicplayer"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ReactAudioPlayer from 'react-audio-player';
import CardActions from '@mui/material/CardActions';
import { getaudioCollectionagainstaSeriesId } from "../../services/getaudiocollection"
interface Props {
    seriesId: any
    collectionId: any
}



export default function AudioCollectionSeriesIdSearch(props: Props) {
    const [checked, setChecked] = React.useState([1]);
    var [musicPlayerInfo, setmusicPlayerInfo] = React.useState({ "description": "No Music Selected", "name": "No Playlist Selected", "music": "", "image": " " })


    return (
        <>
            <Box >
                <Box style={{ "marginTop": "50px", "marginLeft": "50px", "marginBottom": "30px" }}> <MusicPlayer audioMusic={musicPlayerInfo.music} description={musicPlayerInfo.description} name={musicPlayerInfo.name} image={musicPlayerInfo.image} /></Box>




                <List sx={{ width: '100%', bgcolor: 'background.paper' }} >
                    {getaudioCollectionagainstaSeriesId(props.collectionId, props.seriesId).map((value) => {
                        const labelId = `checkbox-list-secondary-label-${value}`;
                        return (
                            <ListItem
                                className="audio-class"
                                key={value.id}

                                disablePadding
                                onClick={() => {
                                    console.log("Clicked")


                                    setmusicPlayerInfo({ "description": value.description, "name": value.name, "music": value.audio, "image": value.image })
                                    console.log(value.audio)

                                }}
                            >
                                <ListItemButton className={styles.audioSeriesandaudioPlayer}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar`}
                                            src={value.image}
                                        />
                                    </ListItemAvatar>
                                    <Typography>{value.name}<br></br><Box style={{ "fontSize": "11px" }}>{value.description}</Box></Typography >

                                </ListItemButton>

                            </ListItem>
                        );
                    })}


                </List>



            </Box >


        </>
    );
}