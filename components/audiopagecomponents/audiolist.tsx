import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactAudioPlayer from 'react-audio-player';
import styles from "../../styles/audio.module.css"
import { AudioEpisodeComponent } from "../../data/audio/types"

export default function CheckboxListSecondary(props: AudioEpisodeComponent) {
    const [checked, setChecked] = React.useState([1]);




    return (
        <List className={styles.audiPlayerMainBox} sx={{ width: '100%', bgcolor: 'background.paper' }} >
            {props.audioList.length > 0 ? props.audioList.map((value) => {
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
                <Typography>No Audio Exist</Typography>

            }
        </List>
    );
}