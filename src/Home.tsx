import React from 'react';
import './Home.css';
import Logo from './logo.png';
import HomePhoneScreen from './homephonescreen.png';
import GraphPhoneScreen from './graph.png';
import {Container, Grid, styled, Typography} from "@material-ui/core";
import ShowChartIcon from '@material-ui/icons/ShowChart';

const ChartIcon = styled(ShowChartIcon)({
  color: "#88BE8C",
  fontSize: "5em",
});

interface PhoneDisplayProps {
  filename: string
}

const PhoneDisplay: React.FC<PhoneDisplayProps> = (props) => {
  return (
    <div className="phonescreen">
      <img className="phonescreen-image" src={props.filename} alt="phone-screen"/>
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
          <PhoneDisplay filename={HomePhoneScreen}/>
        </Grid>
      </Grid>
    </Container>
  );
};

const GraphContent: React.FC = () => {
  return (
    <Container className="graphcontent-container">
      <Grid container direction="row" justify="center" alignItems="center" alignContent="center" spacing={10}>
          <Grid item justify="center" alignContent="center">
            <Typography className="graphcontent-text1" variant="h2">
              Analyse.
            </Typography>
            <div className="graphcontent-icon">
              <ChartIcon/>
            </div>
          </Grid>
        <Grid item>
          <PhoneDisplay filename={GraphPhoneScreen}/>
        </Grid>
        <Grid item>
          <Typography className="graphcontent-text2" variant="h4">
            Lorem ipsum dolor sit amet, consectur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export const Home: React.FC = () => {
  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item style={{position: 'sticky', top: '0px'}}>
          <TopBar/>
        </Grid>
        <Grid item>
          <MainContent/>
        </Grid>
        <Grid item>
          <GraphContent/>
        </Grid>
      </Grid>
    </div>
  );
};