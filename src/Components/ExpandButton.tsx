import React from "react";
import {ButtonBase, Container, styled, useMediaQuery} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {slideTo} from "./SlidingPage";

const ExpandIcon = styled(ExpandMoreIcon)({
  color: "#88BE8C",
  fontSize: "3em",
});

interface ExpandProps {
  id_nb: number
}

export const ExpandButton: React.FC<ExpandProps> = (props) => {
  const matchesWidth = useMediaQuery('(min-width: 800px)');

  if (matchesWidth) {
    return (
      <Container className="expand-container">
        <ButtonBase onClick={() => slideTo(props.id_nb)} className="expand-button" disableRipple={true}>
          <ExpandIcon/>
        </ButtonBase>
      </Container>
    );
  } else {
    return (
      <Container className="expand-container">
      </Container>
    )
  }
};
