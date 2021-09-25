import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" style={{color:"grey"}}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Marvellona
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(  3, 0, 3, 3),
    marginTop: 'auto',
    textAlign:'center',
    marginBottom:'0',
    backgroundColor:'#000',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" style={{color: "white"}}>Made with <span style={{color: "red", fontSize:"1.5em"}} > &#128150; </span>  by Nikita & Khyati </Typography>
          <Copyright />
        </Container>
      </footer>
      </>
    
  );
}