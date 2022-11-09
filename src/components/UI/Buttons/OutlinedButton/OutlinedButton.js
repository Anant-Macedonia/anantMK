import Link from "next/link";
import { Button } from "@mui/material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { outlinedBtn } from "./outlinedButtonStyle";

const OutlinedButton = ({ btnText, link }) => {
  return (
    <>
      {link && (
        <Link href={link} passHref>
          <Button sx={outlinedBtn}>
            {btnText}
            <ButtonIcon />
          </Button>
        </Link>
      )}
    </>
  );
};

export default OutlinedButton;
