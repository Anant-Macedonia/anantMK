import { Button } from "@mui/material";
import React from "react";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { secondaryButton } from "./secondaryButtonStyle";

const SecondaryButton = ({ btnText, href }) => {
  return (
    <Button href={href} sx={secondaryButton}>
      {btnText}
      <ButtonIcon />
    </Button>
  );
};

export default SecondaryButton;
