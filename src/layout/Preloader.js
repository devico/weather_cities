// import { createStyles, makeStyles  } from '@mui/material/styles';
import { createStyles } from '@mui/material/styles'
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';
import React from "react";

const radius = "5px";
const size = 50;

const useStyles = makeStyles((theme) =>
  createStyles({
    loader: {
      border: radius + " solid " + grey["200"],
      borderTop: radius + " solid " + theme.palette.primary.main,
      borderRadius: "50%",
      width: size,
      height: size,
      animation: "loading-indicator-spinner 1.5s linear infinite"
    }
  })
);

export function Preloader() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <style>
        {`
            @keyframes loading-indicator-spinner {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }`}
      </style>
      <div className={styles.loader} />
    </React.Fragment>
  );
}