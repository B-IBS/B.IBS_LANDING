import React, {useEffect, useState} from 'react';
import {
  ButtonBase,
  Container,
  Grid,
  styled,
  Typography,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes, isWidthDown, isWidthUp, withWidth, Snackbar, Slide, useMediaQuery
} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import MailIcon from '@material-ui/icons/Mail';

import '../Style/Home.css';

import Logo from '../Assets/logo.png';
import LogoFull from '../Assets/logo_full.png';
import HomePhoneScreen from '../Assets/homephonescreen.png';
import GraphPhoneScreen from '../Assets/graph.png';
import ScanPhoneScreen from '../Assets/scan.png';
import BrainIA from '../Assets/brain-ia.png';
import MedicHeart from '../Assets/medic-heart.png';
import PuzzlePiece from '../Assets/puzzle-piece.png';

import {CONTENT, contentIdArray, slidePage, slideTo} from "./SlidingPage";
import {PhoneDisplay} from "./PhoneScreen";
import {ExpandButton} from "./ExpandButton";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import {TransitionProps} from "@material-ui/core/transitions";

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

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
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
                Enregistrez vous
              </Typography>
            </Container>
          </ButtonBase>
        </Grid>
      </Grid>
    </Container>
  );
};

const FormContent: React.FC = () => {
  const [snackState, setSnackState] = useState(false);

  return (
    <Container id={contentIdArray[CONTENT.FORM]} className="formcontent-container">
      <Grid container direction="row" alignItems="center" className="formcontent-grid">
        <Grid item xs={6}>
          <img className="formcontent-logo" src={LogoFull} alt="bibs-logo"/>
        </Grid>
        <Grid container direction="column" spacing={3} alignItems="center" justify="center" item xs={6}>
          <Grid item>
            <Typography variant="h2" className="formcontent-top-text text-font">
              Restez en contact:
            </Typography>
          </Grid>
{/*
          <Grid item className="formcontent-textfield-container">
            <InputBase className="formcontent-textfield" defaultValue="Email"/>
          </Grid>
          <Grid item className="formcontent-textfield-container">
            <InputBase className="formcontent-textfield" defaultValue="Nom"/>
          </Grid>
          <Grid item className="formcontent-textfield-container">
            <InputBase className="formcontent-textfield" defaultValue="Prénom"/>
          </Grid>
*/}
          <Grid item className="formcontent-button-grid">
            <ButtonBase className="formcontent-buttonbase" onClick={() => setSnackState(true)} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSevlo4ORx-AlUcjHasPokpSSUSPJ_w2KkTf2GJzdT2EkMqCaw/viewform?usp=sf_link">
              <Container className="formcontent-button-container">
                <Typography variant="h5" className="formcontent-buttontext">
                  S'inscrire
                </Typography>
              </Container>
            </ButtonBase>
          </Grid>
        </Grid>
      </Grid>
      <ExpandButton id_nb={CONTENT.TOP}/>
      <Snackbar
        open={snackState}
        TransitionComponent={SlideTransition}
        autoHideDuration={100000}
        onClose={() => setSnackState(false)}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert severity="success">
          Merci de votre support
        </Alert>
      </Snackbar>
    </Container>
  );
};

const MainContent: React.FC = () => {
  const matchesWidth = useMediaQuery('(min-width: 800px)');

  if (matchesWidth) {
    return (
      <Container id={contentIdArray[CONTENT.TOP]} className="maincontent-container">
        <Grid container direction="row" justify="center" spacing={10}>
          <Grid item container xs direction="column" justify="center" spacing={3}>
            <Grid item>
              <Typography className="maincontent-text1 text-font" align="right" variant="h2">
                Reprenez le contrôle
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="maincontent-text2 text-font" align="right" variant="h6">
                Devenez un acteur majeur de votre maladie grâce à B.IBS
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <PhoneDisplay filename={HomePhoneScreen}/>
          </Grid>
        </Grid>
        <ExpandButton id_nb={CONTENT.FEATURE}/>
      </Container>
    );
  } else {
    return (
      <Container id={contentIdArray[CONTENT.TOP]} className="maincontent-container">
        <Grid item container xs direction="column" justify="center"  alignItems="center" spacing={3}>
          <Grid item>
            <Typography className="maincontent-text1-small text-font" align="right" variant="h2">
              Reprenez le contrôle
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="maincontent-text2-small text-font" align="right" variant="h6">
              Devenez un acteur majeur de votre maladie grâce à B.IBS
            </Typography>
          </Grid>
          <Grid item>
            <PhoneDisplay filename={HomePhoneScreen}/>
          </Grid>
        </Grid>
      </Container>
    )
  }
};

const FeatureContent: React.FC = () => {
  return (
    <Container id={contentIdArray[CONTENT.FEATURE]} className="featurecontent-container">
      <Grid className="featurecontent-grid-container" container direction="row" justify="space-around" spacing={8}>
        <Grid item container xs direction="column" alignItems="center" spacing={5} style={{paddingTop: '15vh'}}>
          <Grid item>
            <img src={BrainIA}  alt="brain-ia" width="100%"/>
          </Grid>
          <Grid item>
            <Typography className="featurecontent-title text-font" variant="h4" align="center">
              Intelligence Artificielle
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="featurecontent-description text-font" variant="h5" align="center">
              Profitez d'un suivi et de recommandations personnalisées grâce à l'intelligence artificielle
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs direction="column" alignItems="center" spacing={5} style={{paddingTop: '15vh'}}>
          <Grid item>
            <img src={PuzzlePiece} alt="puzzle-piece" width="100%"/>
          </Grid>
          <Grid item>
            <Typography className="featurecontent-title text-font" variant="h4" align="center">
              Personnalisable et personnalisé
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="featurecontent-description text-font" variant="h5" align="center">
              Profitez de solutions adaptées à vos besoins et choissisez celles que vous préférez
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs direction="column" alignItems="center" spacing={5} style={{paddingTop: '15vh'}}>
          <Grid item>
            <img src={MedicHeart} alt="medic-heart" width="100%"/>
          </Grid>
          <Grid item>
            <Typography className="featurecontent-title text-font" variant="h4" align="center">
              Faites vous comprendre
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="featurecontent-description text-font" variant="h5" align="center">
              Facilitez la communication avec votre médecin à l'aide d'une synthèse de votre situation
            </Typography>
          </Grid>
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
        <Typography className="graphcontent-text2 text-font" variant="h4">
          Suivez votre progression grâce à des outils faciles à utiliser
        </Typography>
      </div>
    );
  };
  return (
    <Container id={contentIdArray[CONTENT.ANALYSE]} className="graphcontent-container">
      <Grid container direction="row" justify="center" alignItems="center" alignContent="center" spacing={10}>
          <Grid item>
            <div className="graphcontent-icon">
              <Typography className="graphcontent-text1 text-font" variant="h2">
                Analyse
              </Typography>
            </div>
            <div className="graphcontent-icon">
              <ChartIcon/>
            </div>
            {
              isWidthDown('md', props.width) && responsiveSideText()
            }
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
        <Typography className="scancontent-text2 text-font" variant="h4">
          Simplifiez vous la recherche des FODMAPs
        </Typography>
      </div>
    );
  };
  return (
    <Container id={contentIdArray[CONTENT.SCAN]} className="scancontent-container">
      <Grid container direction="row" justify="center" alignItems="center" alignContent="center" spacing={10}>
        <Grid item>
          <div className="scancontent-icon">
            <Typography className="scancontent-text1 text-font" variant="h2">
              Scan
            </Typography>
          </div>
          <div className="scancontent-icon">
            <ScanIcon/>
          </div>
          {
            isWidthDown('md', props.width) && responsiveSideText()
          }
        </Grid>
        <Grid item>
          <PhoneDisplay filename={ScanPhoneScreen}/>
        </Grid>
        { isWidthUp('lg', props.width) && (
          <Grid item>
            {responsiveSideText()}
          </Grid>
        )}
      </Grid>
      <ExpandButton id_nb={CONTENT.END}/>
    </Container>
  );
};
const ScanContent = withWidth()(ScanContentSize);

const EndContent: React.FC = () => {
  return (
    <Container id={contentIdArray[CONTENT.END]} className="endcontent-container">
      <Grid container direction="column" justify="center" alignItems="center" className="endcontent-grid" spacing={5}>
        <Grid item>
          <Typography variant="h2" className="endcontent-title text-font" align="center">
            Pour rester informés, inscrivez-vous à notre contact.
          </Typography>
        </Grid>
        <Grid item>
          <ButtonBase onClick={() => slideTo(CONTENT.FORM)} className="topbar-buttonbase endcontent-button-base">
            <Container className="endcontent-button-container">
              <Typography className="endcontent-button-text">
                S'inscrire
              </Typography>
            </Container>
          </ButtonBase>
        </Grid>
      </Grid>
    </Container>
  )
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
  const matchesWidth = useMediaQuery('(min-width: 800px)');

  useEffect(() => {
    setTimeout(() => {
      if (document.documentElement.scrollTop !== 0)
        slideTo(CONTENT.FORM)
    }, 1000);
  }, []);

  return (
    <div onWheel={(e) => {
      if (matchesWidth)
        slidePage(e);
    }}
      style={{overflowY: matchesWidth ? 'hidden' : 'initial', overflowX: "hidden", height: '100vh'}}
    >
      <ThemeProvider theme={theme}>
        <Grid container direction="column" justify="center">
          <Grid item className="topbar-sticky">
            <TopBar/>
          </Grid>
          <Grid item>
            <FormContent/>
          </Grid>
          <Grid item>
            <MainContent/>
          </Grid>
          <Grid item>
            <FeatureContent/>
          </Grid>
          <Grid item>
            <AnalyseContent/>
          </Grid>
          <Grid item>
            <ScanContent/>
          </Grid>
          <Grid item>
            <EndContent/>
          </Grid>
          <Grid item>
            <FooterContent/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};