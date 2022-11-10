import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { secondaryButton } from "./secondaryButtonStyle";

const SecondaryButton = ({ btnText, link }) => {
  return (
    <Link href={link} passHref>
      <Button sx={secondaryButton}>
        {btnText}
        <ButtonIcon />
      </Button>
    </Link>
  );
};

export default SecondaryButton;
