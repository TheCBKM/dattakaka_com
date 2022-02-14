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
import { NextPage } from "next";

import ReactAudioPlayer from 'react-audio-player';




interface Props {
  rowData: {
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
}


const MediaCards: NextPage<Props> = (props: Props) => {
  const theme = useTheme();
  const [play, setPlay] = React.useState(true)

  return (
    <div>

      <Card sx={{ display: 'flex' }} className={styles.audiosSeriesCardMain} >


        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={props.rowData.image}
          alt="Live from space album cover"
          className={styles.audiosSeriesCardImage}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.audioControlsMain}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {props.rowData.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {props.rowData.description}

            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            {/*{play ? <IconButton aria-label="previous" onClick={playSound}>
              <PlayIcon />
            </IconButton> :
              <IconButton aria-label="previous" onClick={pauseSound}>
                <PauseIcon />
              </IconButton>
            }*/}
            <ReactAudioPlayer
              src={props.rowData.audio}
              className={styles.audioPlayer}

              controls
            />


          </Box>
        </Box>

      </Card>

    </div>
  );
}
export default MediaCards