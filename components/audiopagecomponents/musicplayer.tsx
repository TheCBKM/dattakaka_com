import React from "react";
import CardContent from "@material-ui/core/CardContent";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Card from "@material-ui/core/Card";
import ReactAudioPlayer from 'react-audio-player';


interface Props {
    audioMusic: string
    description: string
    name: string
    image: string
}


export default function App(props: Props) {


    return (
        <div >


            <Card
                style={{
                    width: 400,
                    display: "flex",
                    backgroundColor: "whitesmoke",
                    boxShadow: "4px 4px 4px gray",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent
                        style={{
                            flex: "1 0 auto",
                        }}
                    >
                        <Typography component="h5" variant="h5">
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.description}
                        </Typography>
                        <ReactAudioPlayer
                            style={{ "display": "inline-block" }}
                            src={props.audioMusic}
                            preload="metadata"



                            controls
                        />
                    </CardContent>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            paddingLeft: 1,
                            paddingBottom: 1,
                        }}
                    >

                    </div>
                </div>
                <CardMedia
                    style={{
                        width: 151,
                    }}
                    image={props.image}

                />

            </Card>
        </div>
    );
}