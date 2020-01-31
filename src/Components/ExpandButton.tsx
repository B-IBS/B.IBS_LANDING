import React from "react";
import {ButtonBase, Container, styled} from "@material-ui/core";
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
  return (
    <Container className="expand-container">
      <ButtonBase onClick={() => slideTo(props.id_nb)} className="expand-button" disableRipple={true}>
        <ExpandIcon/>
      </ButtonBase>
    </Container>
  );
};
