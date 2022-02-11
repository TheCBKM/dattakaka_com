
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from "../../styles/testimonials.module.css"
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function TestimonialsPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: 10 }}>
        <Grid container spacing={2} sx={{ justifyContent: 'center', padding: 0 }}>
          <Grid item xs={8} md={4} className={styles.testimonialPaddingClass}>
            <Item><CardMedia
              component="img"

              image="./images/datatakatestimonial.webp"
              alt="green iguana"

            /></Item>
          </Grid>
          <Grid item xs={8} md={4} className={styles.testimonialPaddingClass}>
            <Item className={styles.GridPadding}><Typography variant="h3">About</Typography><br></br>
              <Typography variant="h5">The Brief</Typography>
              <br></br>
              <br></br>
              <Typography sx={{ padding: 1.5 }}>Being Happy is the most vital, valuable thing in life. If one is not happy means he doesnt have the right thought process. When it comes to Saints, they are the happiest soul alive. They have understood life, accepted the concepts and now making use of them to live a happy life. So to be happy; the easiest way is to align with Saints thought process by listening and accepting him. A modern and recent Saint who used latest computer technology in a professional organization, LIC, the disciple of Gondavlekar Maharaj, Namyogi Datta Kaka ( D P Kulkarni) has many books on guidance on happy life at the home, office, business..in a group or alone..young, middle-age or riped..( Sukh samvad).</Typography><br></br><br></br>

              <Button variant="contained" sx={{ background: "black" }}>Must Read</Button>
            </Item>
          </Grid>


        </Grid>

      </Box>

    </>
  );
};

export default TestimonialsPage;