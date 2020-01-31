import React, {useEffect} from 'react';
import {
  ButtonBase,
  Container,
  Grid,
  styled,
  Typography,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core";
import ShowChartIcon from '@material-ui/icons/ShowChart';

import '../Style/Home.css';

import Logo from '../Assets/logo.png';
import HomePhoneScreen from '../Assets/homephonescreen.png';
import GraphPhoneScreen from '../Assets/graph.png';

import {CONTENT, contentIdArray, slidePage, slideTo} from "./SlidingPage";
import {PhoneDisplay} from "./PhoneScreen";
import {ExpandButton} from "./ExpandButton";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const ChartIcon = styled(ShowChartIcon)({
  color: "#88BE8C",
  fontSize: "5em",
});

const TopBar: React.FC = () => {
  return (
    <Container className="topbar-container" maxWidth="xl">
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <img className="topbar-container-logo" src={Logo} alt="bibs-logo"/>
        </Grid>
        <Grid item>
          <ButtonBase onClick={() => slideTo(CONTENT.FORM)} className="topbar-buttonbase">
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
    <Container id={contentIdArray[CONTENT.TOP]} className="maincontent-container">
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
      <ExpandButton id_nb={CONTENT.GRAPH}/>
    </Container>
  );
};

const GraphContent: React.FC = () => {
  return (
    <Container id={contentIdArray[CONTENT.GRAPH]} className="graphcontent-container">
      <Grid container direction="row" justify="center" alignItems="center" alignContent="center" spacing={10}>
          <Grid item>
            <div className="graphcontent-icon">
              <Typography className="graphcontent-text1" variant="h2">
                Analyse.
              </Typography>
            </div>
            <div className="graphcontent-icon">
              <ChartIcon/>
            </div>
          </Grid>
        <Grid item>
          <PhoneDisplay filename={GraphPhoneScreen}/>
        </Grid>
        <Grid item>
          <Typography className="graphcontent-text2" variant="h4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
      </Grid>
      <ExpandButton id_nb={CONTENT.FORM}/>
    </Container>
  );
};

const FormContent: React.FC = () => {
  return (
    <Container id={contentIdArray[CONTENT.FORM]} className="formcontent-container">
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
  useEffect(() => {
      setTimeout(() => {
        if (document.documentElement.scrollTop !== 0)
          slideTo(CONTENT.TOP)
      }, 1000);
  }, []);

  return (
    <div onWheel={slidePage}>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
};