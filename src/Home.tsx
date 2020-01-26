import React from 'react';
import './Home.css';
import Logo from './logo.png';
import HomePhoneScreen from './homephonescreen.png';
import {Container, Grid, Typography} from "@material-ui/core";

const PhoneDisplay: React.FC = () => {
  return (
    <div className="phonescreen">
      <img className="phonescreen-image" src={HomePhoneScreen} alt="phone-screen"/>
    </div>
  );
};

const TopBar: React.FC = () => {
  return (
    <Container className="topbar-container" maxWidth="xl">
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <img className="topbar-container-logo" src={Logo} alt="bibs-logo"/>
        </Grid>
        <Grid item>
          <Container className="topbar-button-container">
            <Typography className="topbar-button-text">
              Do Stuff
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

const MainContent: React.FC = () => {
  return (
    <Container className="maincontent-container">
      <Grid container direction="row" justify="center" spacing={10}>
        <Grid item container xs direction="column" justify="center" spacing={3}>
          <Grid item>
            <Typography className="maincontent-text1" align="right" variant="h2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="maincontent-text2" align="right" variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <PhoneDisplay/>
        </Grid>
      </Grid>
    </Container>
  );
};

export const Home: React.FC = () => {
  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item>
          <TopBar/>
        </Grid>
        <Grid item style={{margin: '1em'}}/>
        <Grid item>
          <MainContent/>
        </Grid>
      </Grid>
    </div>
  );
};