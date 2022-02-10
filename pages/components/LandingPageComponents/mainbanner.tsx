import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/Navbar.module.css";
import Box from "@mui/material/Box";
import { fontSize } from "@mui/system";

const inlinestyles = {
  media: {
    height: "100%",
    opacity: 0.8,
    background: "transparent",
  },
  card: { position: "relative" },
  overlay: {
    position: "absolute",
    top: "80%",

    width: "100%",

    color: "white",
    backgroundColor: "none",
  },
};

export default function MediaCard() {
  return (
    <Card className={styles.mainBannerStyles} sx={inlinestyles.card}>
      <CardMedia
        style={inlinestyles.media}
        component="img"
        height="140"
        image="./images/Dattakakamainbanner.webp"
        alt="green iguana"
      />
      <Box sx={inlinestyles.overlay}>
        <Typography style={{ fontSize: "4vw" }} variant="h2">
          DATTAKAKA.COM
        </Typography>
        <Button
          style={{ background: "black", padding: "10px", fontSize: "1rem" }}
          variant="contained"
          size="small"
        >
          Learn More
        </Button>
      </Box>
    </Card>
  );
}
