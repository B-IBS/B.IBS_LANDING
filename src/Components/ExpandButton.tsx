import React from "react";
import {ButtonBase, Container, styled} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ExpandIcon = styled(ExpandMoreIcon)({
  color: "#88BE8C",
  fontSize: "3em",
});

interface ExpandProps {
  href: string
}

export const ExpandButton: React.FC<ExpandProps> = (props) => {
  return (
    <Container className="expand-container">
      <ButtonBase href={props.href} className="expand-button" disableRipple={true}>
        <ExpandIcon/>
      </ButtonBase>
    </Container>
  );
};
