import React, {useEffect} from 'react';
import {
  ButtonBase,
  Container,
  Grid,
  styled,
  Typography,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes, isWidthDown, isWidthUp, withWidth, InputBase
} from "@material-ui/core";
import ShowChartIcon from '@material-ui/icons/ShowChart';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import MailIcon from '@material-ui/icons/Mail';

import '../Style/Home.css';

import Logo from '../Assets/logo.png';
import LogoFull from '../Assets/logo_full.png';
import HomePhoneScreen from '../Assets/homephonescreen.png';
import GraphPhoneScreen from '../Assets/graph.png';

import {CONTENT, contentIdArray, slidePage, slideTo} from "./SlidingPage";
import {PhoneDisplay} from "./PhoneScreen";
import {ExpandButton} from "./ExpandButton";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const ChartIcon = styled(ShowChartIcon)({
  color: "#88BE8C",
  fontSize: "5em",
});
const ScanIcon = styled(CenterFocusWeakIcon)({
  color: "#88BE8C",
  fontSize: "5em",
});
const MailIconFooter = styled(MailIcon)({
  fontSize: "1em",
  paddingRight: "0.5em"
});

interface WidthProps {
  width: Breakpoint
}

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
      <ExpandButton id_nb={CONTENT.ANALYSE}/>
    </Container>
  );
};

const AnalyseContentSize: React.FC<WidthProps> = (props) => {
  const responsiveSideText = () => {
    return (
      <div className="graphcontent-icon">
        <Typography className="graphcontent-text2" variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
    );
  };
  return (
    <Container id={contentIdArray[CONTENT.ANALYSE]} className="graphcontent-container">
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
            { isWidthDown('md', props.width) && (
              <div className="graphcontent-icon">
                {responsiveSideText()}
              </div>
            )}
          </Grid>
        <Grid item>
          <PhoneDisplay filename={GraphPhoneScreen}/>
        </Grid>
        { isWidthUp('lg', props.width) && (
          <Grid item>
            {responsiveSideText()}
          </Grid>
        )}
      </Grid>
      <ExpandButton id_nb={CONTENT.SCAN}/>
    </Container>
  );
};
const AnalyseContent = withWidth()(AnalyseContentSize);

const ScanContentSize: React.FC<WidthProps> = (props) => {
  const responsiveSideText = () => {
    return (
      <div className="scancontent-icon">
        <Typography className="scancontent-text2" variant="h4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
    );
  };
  return (
    <Container id={contentIdArray[CONTENT.SCAN]} className="scancontent-container">
      <Grid container direction="row" justify="center" alignItems="center" alignContent="center" spacing={10}>
        <Grid item>
          <div className="scancontent-icon">
            <Typography className="scancontent-text1" variant="h2">
              Scan.
            </Typography>
          </div>
          <div className="scancontent-icon">
            <ScanIcon/>
          </div>
          { isWidthDown('md', props.width) && (
            <div className="scancontent-icon">
              {responsiveSideText()}
            </div>
          )}
        </Grid>
        <Grid item>
          <PhoneDisplay filename={GraphPhoneScreen}/>
        </Grid>
        { isWidthUp('lg', props.width) && (
          <Grid item>
            {responsiveSideText()}
          </Grid>
        )}
      </Grid>
      <ExpandButton id_nb={CONTENT.FORM}/>
    </Container>
  );
};
const ScanContent = withWidth()(ScanContentSize);

const FormContent: React.FC = () => {
  return (
    <Container id={contentIdArray[CONTENT.FORM]} className="formcontent-container">
      <Grid container direction="row">
        <Grid item xs={6}>
          <img className="formcontent-logo" src={LogoFull} alt="bibs-logo"/>
        </Grid>
        <Grid container direction="column" spacing={3} alignItems="center" justify="center" item xs={6}>
          <Grid item>
            <Typography variant="h2" className="formcontent-top-text">
              Stay updated:
            </Typography>
          </Grid>
          <Grid item className="formcontent-textfield-container">
            <InputBase className="formcontent-textfield" defaultValue="Email"/>
          </Grid>
          <Grid item className="formcontent-textfield-container">
            <InputBase className="formcontent-textfield" defaultValue="Name"/>
          </Grid>
          <Grid item className="formcontent-textfield-container">
            <InputBase className="formcontent-textfield" defaultValue="Firstname"/>
          </Grid>
          <Grid item className="formcontent-button-grid">
            <ButtonBase className="formcontent-buttonbase">
              <Container className="formcontent-button-container">
                <Typography variant="h5" className="formcontent-buttontext">
                  Subscribe
                </Typography>
              </Container>
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const FooterContent: React.FC = () => {
  return (
    <Container className="footercontent-container">
      <Grid className="footercontent-grid" container direction="row" justify="center" alignItems="center">
        <Grid item>
          <MailIconFooter/>
          bibs_2022@labeip.epitech.eu
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
            <AnalyseContent/>
          </Grid>
          <Grid item>
            <ScanContent/>
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