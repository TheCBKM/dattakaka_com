import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ExploreCards from "./explorecards"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "gray", padding: "5%", marginTop: 10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

        <Grid item xs={12} sm={4} md={4} >
          <ExploreCards imgsrc="./images/ExplorePage/listen.webp" btnText="Listen" heading="Listen" />


        </Grid>
        <Grid item xs={12} sm={4} md={4} >
          <ExploreCards imgsrc="./images/ExplorePage/Read.webp" btnText="Read" heading="E-Books to Read" />

        </Grid>
        <Grid item xs={12} sm={4} md={4} >
          <ExploreCards imgsrc="./images/ExplorePage/videos.webp" btnText="VIDEOS" heading="View" />


        </Grid>

      </Grid>
    </Box>
  );
}