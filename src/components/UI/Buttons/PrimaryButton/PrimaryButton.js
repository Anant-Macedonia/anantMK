import Link from "next/link";
import { Button } from "@mui/material";
import ButtonIcon from "../../ButtonIcon/ButtonIcon";
import { primaryBtn, primaryBtnMargin } from "./primaryButtonStyle";

const PrimaryButton = ({ btnText, btnClass, link }) => {
  return (
    <Link href="/" passHref>
      <Button sx={btnClass === "btnMargin" ? primaryBtnMargin : primaryBtn}>
        {btnText}
        <ButtonIcon />
      </Button>
    </Link>
  );
};

export default PrimaryButton;
