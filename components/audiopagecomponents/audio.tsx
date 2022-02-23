import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { getaudioSeries } from "../../services/getaudioseries";
import Typography from "@mui/material/Typography";
import styles from "../../styles/audio.module.css";
import { SampleCollection1 } from "../../data/audio/sample";
import { SampleCollection2 } from "../../data/audio/sample";

import { getaudioCollection } from "../../services/getaudiocollection";
import Button from "@mui/material/Button";

import Link from "next/link";
import CardActions from "@mui/material/CardActions";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";
import { AudioSeries } from "../../data/audio/types";

export default function MediaControlCard() {
  const [checked, setChecked] = React.useState([1]);
  const [featureAudioSeries, setfeatureAudioSeries] =
    React.useState<AudioSeries[]>();
  React.useEffect(() => {
    setfeatureAudioSeries(getaudioSeries(1));
    console.log("The feature aurdio series is ", featureAudioSeries);
  }, []);

  return (
    <>
      <Grid container className={styles.mainBoxContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            className={styles.collectionsMainHeadingText}
          >
            All Collections
          </Typography>

          <Grid container spacing={1} className={styles.collectionBoxes}>
            <Grid item xs={12} md={6}>
              <Box className={styles.mainCollectionBox}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Series Image"
                    height="500"
                    image={SampleCollection1.image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styles.audioCardtext}
                    >
                      {SampleCollection1.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={styles.audioCardtext}
                    >
                      {SampleCollection1.description}
                    </Typography>
                    <Link href="/audio/1">
                      <Button className={styles.linkBtnDesign}>
                        View More Information
                      </Button>
                    </Link>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className={styles.mainCollectionBox}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Series Image"
                    height="500"
                    image={SampleCollection2.image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styles.audioCardtext}
                    >
                      {SampleCollection2.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={styles.audioCardtext}
                    >
                      {SampleCollection2.description}
                    </Typography>
                    <Link href="/audio/2">
                      <Button className={styles.linkBtnDesign}>
                        View More Information
                      </Button>
                    </Link>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            className={styles.collectionsMainHeadingText}
          >
            Featured Audio Series
          </Typography>

          <Grid container spacing={1} className={styles.collectionBoxes}>
            {getaudioSeries(1).map((value, i) => {
              return (
                <Grid item xs={12} md={6} key={i}>
                  <Box className={styles.mainCollectionBox}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt="Series Image"
                        height="500"
                        image={value.image}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          className={styles.audioCardtext}
                        >
                          {value.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={styles.audioCardtext}
                        >
                          {value.description}
                        </Typography>
                        <Link
                          href={{
                            pathname: `/audio/${value.audioCollectionId}/${value.id}`,
                          }}
                        >
                          <Button className={styles.linkBtnDesign}>
                            View More Information
                          </Button>
                        </Link>
                      </CardContent>
                      <CardActions></CardActions>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            className={styles.collectionsMainHeadingText}
          >
            Featured Audio Collection
          </Typography>

          <Grid container className={styles.collectionBoxes} spacing={1}>
            {getaudioCollection(1).map((value, i) => {
              return (
                <Grid item xs={12} md={6} key={i}>
                  <Box className={styles.mainCollectionBox}>
                    <Card>
                      <CardMedia
                        component="img"
                        alt="Series Image"
                        height="500"
                        image={value.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {value.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          href={{
                            pathname: `/audio/${value.audioCollectionId}/${value.id}`,
                          }}
                        >
                          <Button className={styles.linkBtnDesign}>
                            View More Information
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
