import React from 'react';
import './Home.css';
import Logo from './logo.png';
import HomePhoneScreen from './homephonescreen.png';
import GraphPhoneScreen from './graph.png';
import {ButtonBase, Container, Grid, styled, Typography} from "@material-ui/core";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ChartIcon = styled(ShowChartIcon)({
  color: "#88BE8C",
  fontSize: "5em",
});

const ExpandIcon = styled(ExpandMoreIcon)({
  fontSize: "3em",
});

interface PhoneDisplayProps {
  filename: string
}
interface ExpandProps {
  href: string
}

const PhoneDisplay: React.FC<PhoneDisplayProps> = (props) => {
  return (
    <div className="phonescreen">
      <img className="phonescreen-image" src={props.filename} alt="phone-screen"/>
    </div>
  );
};

const Expand: React.FC<ExpandProps> = (props) => {
  return (
    <Container className="expand-container">
      <ButtonBase href={props.href} className="expand-button" disableRipple={true}>
        <ExpandIcon/>
      </ButtonBase>
    </Container>
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
          <ButtonBase href="#formcontent" className="topbar-buttonbase">
            <Container className="topbar-button-container">
              <Typography className="topbar-button-text">
                Do Stuff
              </Typography>
            </Container>
          </ButtonBase>
        </Grid>
      </Grid>
    </Container>
  );
};

const MainContent: React.FC = () => {
  return (
    <Container id="topcontent" className="maincontent-container">
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
      <Expand href="#graphcontent"/>
    </Container>
  );
};

const GraphContent: React.FC = () => {
  return (
    <Container id="graphcontent" className="graphcontent-container">
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
      <Expand href="#formcontent"/>
    </Container>
  );
};

const FormContent: React.FC = () => {
  return (
    <Container id="formcontent" className="formcontent-container">
      Yes
    </Container>
  );
};

const FooterContent: React.FC = () => {
  return (
    <Container className="footercontent-container">
      <Grid className="footercontent-grid" container direction="row" justify="space-between">
        <Grid item>
          super
        </Grid>
        <Grid item>
          Contact us at: bibs_2022@labeip.epitech.eu
        </Grid>
      </Grid>
    </Container>
  );
};

export const Home: React.FC = () => {
  return (
    <div>
      <Grid container direction="column" justify="center">
        <Grid item className="topbar-sticky">
          <TopBar/>
        </Grid>
        <Grid item>
          <MainContent/>
        </Grid>
        <Grid item>
          <GraphContent/>
        </Grid>
        <Grid item>
          <FormContent/>
        </Grid>
        <Grid item>
          <FooterContent/>
        </Grid>
      </Grid>
    </div>
  );
};